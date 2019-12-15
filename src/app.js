import React, { Component } from "react";
import NavBar from "./components/layout/navbar";
import Chart1 from "./components/layout/chart1";
import Chart2 from "./components/layout/chart2";
import Footer from "./components/layout/footer";
class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <main className="container"></main>
        <NavBar />
        <Chart1 />
        {/* <Chart2 /> */}
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
