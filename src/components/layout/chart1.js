import React, { Component } from "react";
import axios from "axios";
import CanvasJSReact from "../../assets/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Chart1 extends Component {
  // constructor() {}

  state = {
    data: [],
    status: ""
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:5000").then(res => {
      var trendData = res["data"]["data"];
      for (var i = 0; i < trendData.length; i++) {
        trendData[i]["x"] = new Date(trendData[i]["x"]);
      }
      this.setState({ data: trendData, status: res["data"]["status"] });
    });
  }
  render() {
    // console.log(this.state.data);
    const options = {
      animationEnabled: true,
      exportEnabled: true,
      theme: "dark2", // "light1", "dark1", "dark2"
      title: {
        text: "Live Feed"
      },
      axisY: {
        title: "Data",
        suffix: "",
        includeZero: true
      },
      axisX: {
        title: "Time",
        valueFormatString: "DD-MM",
        intervalType: "day",
        interval: 1
      },
      data: [
        {
          type: "line",
          toolTipContent: "{x}: value {y}",
          dataPoints: this.state.data
        }
      ]
    };

    return (
      <div>
        <div className="row">
          {/* <div className="col s12 blue-grey darken-4 z-depth-2">
            <h2 className="center green-text text-lighten-3 z-depth-4">
              Simulations
            </h2>
          </div> */}
          <div className="col s12 m4 l2">
            <div className="row">
              <div>
                <div className="card blue-grey darken-4 z-depth-5">
                  <div className="card-content white-text">
                    <span className="card-title">Fetching Status</span>
                    <h3 className="green-text">{this.state.status}</h3>
                  </div>
                  <div className="card-action">
                    <a href="#">More Features Arriving Soon</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col s12 m4 l8 ">
            <div className="row">
              <div>
                <div className="card blue-grey darken-4 z-depth-5">
                  <div className="card-content white-text">
                    <CanvasJSChart
                      options={options}
                      /* onRef={ref => this.chart = ref} */
                    />
                    {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col s12 m4 l2">
            <div className="row">
              <div>
                <div className="card blue-grey darken-4 z-depth-5">
                  <div className="card-content white-text">
                    <span className="card-title">
                      <b>Forecast</b>
                    </span>
                    <p>Machine Learning Under Development.</p>
                  </div>
                  <div className="card-action">
                    <a href="https://github.com/nishantbaheti">
                      Github for development status
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Chart1;
