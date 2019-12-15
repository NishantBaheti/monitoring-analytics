import React, { Component } from "react";

class Chart2 extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <div className="col s6">
          <div className="row">
            <div>
              <div className="card blue-grey darken-4 z-depth-5">
                <div className="card-content white-text">
                  <span className="card-title">Current Status</span>
                  <p>Rest Api Under Development.</p>
                </div>
                <div className="card-action">
                  <a href="#">arriving soon</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col s6">
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
                    Github Link for development status
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Chart2;
