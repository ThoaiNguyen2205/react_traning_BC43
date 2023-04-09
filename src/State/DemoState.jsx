import React, { Component } from "react";
import DemoLogin from "./DemoLogin";
import BaitapChonXe from "./BaitapChonXe";
import DemoChangeFontSize from "./DemoChangeFontSize";
import DemoChangeColor from "./DemoChangeColor";
export default class DemoState extends Component {
  render() {
    return (
      <div style={{ marginBottom: 500 }}>
        <DemoLogin />
        <BaitapChonXe />
        <DemoChangeFontSize />
        <hr />
        <DemoChangeColor />
      </div>
    );
  }
}
