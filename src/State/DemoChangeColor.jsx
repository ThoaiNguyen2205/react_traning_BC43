import React, { Component } from "react";

export default class DemoChangeColor extends Component {
  state = {
    homeColor: "black",
  };
  render() {
    return (
      <div className="container">
        <i
          style={{ color: this.state.homeColor }}
          className="fa fa-home fs-1"
        ></i>
        <select
          className="mt-2 form-control w-25"
          onChange={(event) => {
            let value = event.target.value;
            this.setState({
              homeColor: value,
            });
          }}
        >
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </select>
      </div>
    );
  }
}
