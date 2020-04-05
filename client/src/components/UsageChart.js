import React from "react";
import { Line } from "react-chartjs-2";

class UsageChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData
    };
  }

  render() {
    var lineChartOptions = {
      legend: {
        display: false
      },
      scales: {
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Dates",
              fontSize: 15
            }
          }
        ],
        yAxes: [
          {
            display: true,
            ticks: {
              beginAtZero: true,
              min: 0,
              callback: function(value) {
                return value + "%";
              }
            },
            scaleLabel: {
              display: true,
              labelString: "Usage Percentage",
              fontSize: 15
            }
          }
        ]
      },
      tooltips: {
        callbacks: {
          label: function(tooltipItem, data) {
            return data["datasets"][0]["data"][tooltipItem["index"]] + "%";
          }
        }
      },
      responsive: true,
      maintainAspectRatio: false,
      aspectRatio: 2
    };

    return (
      <div
        className="chart mb-5"
        style={{
          position: "relative",
          height: "23em",
          width: "100%"
        }}
      >
        <Line data={this.props.chartData} options={lineChartOptions} />
      </div>
    );
  }
}

export default UsageChart;
