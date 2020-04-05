import React from "react";
import { Bar } from "react-chartjs-2";

class TeamsChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData
    };
  }

  render() {
    var barChartOptions = {
      legend: {
        display: false
      },
      scales: {
        xAxes: [
          {
            ticks: {
              callback: function(tooltipItem) {
                var name =
                  tooltipItem.substring(0, 1).toUpperCase() +
                  tooltipItem.substring(1);
                var cap_name = name.replace(/(^|[\s-])\S/g, function(match) {
                  return match.toUpperCase();
                });

                return cap_name;
              },
              autoSkip: false,
              fontSize: 11
            },
            scaleLabel: {
              display: false,
              labelString: "Pokémon with >= 10% usage",
              fontSize: 11,
              fontStyle: "italic"
            }
          }
        ],
        yAxes: [
          {
            ticks: {
              callback: function(value) {
                return value + "%";
              },
              beginAtZero: true
            },
            scaleLabel: {
              display: true,
              labelString: "Usage Percentage",
              fontSize: 11
            }
          }
        ]
      },
      tooltips: {
        callbacks: {
          label: function(tooltipItem, data) {
            var name =
              data["labels"][tooltipItem["index"]]
                .substring(0, 1)
                .toUpperCase() +
              data["labels"][tooltipItem["index"]].substring(1);
            var cap_name = name.replace(/(^|[\s-])\S/g, function(match) {
              return match.toUpperCase();
            });
            var percentage = data["datasets"][0]["data"][tooltipItem["index"]];

            return cap_name + ": " + percentage + "%";
          }
        }
      },
      responsive: true,
      maintainAspectRatio: false,
      aspectRatio: 2
    };

    return (
      <div
        className="chart"
        style={{
          position: "relative",
          height: "23em",
          width: "100%"
        }}
      >
        <Bar data={this.props.chartData} options={barChartOptions} />
      </div>
    );
  }
}

export default TeamsChart;
