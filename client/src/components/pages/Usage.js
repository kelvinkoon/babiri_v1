import React from "react";
import scraper from "../../apis/scraper";

import UsageSearchBar from "../UsageSearchBar";
import UsageChart from "../UsageChart";

import LoadingSpinner from "../layout/LoadingSpinner";

// Functions to generate Chart colours
function getRedOrBlue() {
  var color;
  var rand = Math.floor(Math.random() * 10);
  rand % 2 === 0 ? (color = "#ADD8E6") : (color = "#FFCCCB");
  return color;
}

class Usage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usage: [],
      pokemon: "",
      loading: false
    };
  }

  componentDidMount() {
    this.onTermSubmit();
  }

  onTermSubmit = async pokemon => {
    var setParams = { pokemon: pokemon };
    var chartData = {};
    var resPokemon = "";

    this.setState({ loading: true });
    const res = await scraper.get("/usage", {
      params: setParams
    });
    var chartColor = getRedOrBlue();
    this.setState({ loading: false });
    if (typeof res.data !== "undefined") {
      chartData = {
        labels: res.data.map(usageMon => {
          return usageMon.date.substring(0, 10);
        }),
        datasets: [
          {
            label: "Usage Stats",
            data: res.data.map(usageMon => {
              return usageMon.usage.percent;
            }),
            backgroundColor: chartColor,
            borderColor: chartColor,
            borderWidth: 2,
            lineTension: 0,
            fill: false,
            pointRadius: 3,
            pointHitRadius: 10
          }
        ]
      };
      typeof res.data[0] !== "undefined"
        ? (resPokemon = res.data[0].pokemon)
        : (resPokemon = "");
    }

    this.setState({
      chartData: chartData,
      pokemon: resPokemon
    });
  };

  render() {
    const { loading } = this.state;

    return (
      <div className="container">
        <p>
          <i>Track the usage of any Pokémon through the season.</i>
        </p>
        <UsageSearchBar onFormSubmit={this.onTermSubmit} />
        <br />
        {loading ? (
          <LoadingSpinner
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          />
        ) : (
          <div className="row text-center">
            <div className="col">
              <h5>
                {this.state.pokemon !== "" && this.state.usage !== [] ? (
                  <img
                    src={require(`../../img/sprites/${this.state.pokemon}.png`)}
                    alt="statsmon1"
                    key="statsmon1"
                  />
                ) : (
                  ""
                )}
                <b> Time Series Usage </b>
                {this.state.pokemon !== "" && this.state.usage !== [] ? (
                  <img
                    src={require(`../../img/sprites/${this.state.pokemon}.png`)}
                    alt="statsmon2"
                    key="statsmon2"
                  />
                ) : (
                  ""
                )}
              </h5>
              {this.state.chartData ? (
                <UsageChart
                  chartData={this.state.chartData}
                  className="column "
                />
              ) : (
                ""
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Usage;
