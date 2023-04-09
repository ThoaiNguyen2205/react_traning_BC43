import React, { Component } from "react";
// B1: dàn layout
// B2: fontSize :number
// B3: đưa state lên giao diện
// B4: thay đổi state
export default class DemoChangeFontSize extends Component {
  state = {
    fSize: 16,
  };
  render() {
    return (
      <div className="container mt-5">
        <h3 className="text-center">Bài tập tăng giảm font-size</h3>
        <p style={{ fontSize: `${this.state.fSize}px` }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum illo
          voluptates harum, ut atque cum eaque eius laboriosam! Numquam, ullam?
        </p>
        <button
          className="btn btn-success mx-2"
          onClick={() => {
            this.setState({
              fSize: this.state.fSize + 2,
            });
          }}
        >
          +
        </button>
        <button
          className="btn btn-success mx-2"
          onClick={() => {
            this.setState({
              fSize: this.state.fSize - 2,
            });
          }}
        >
          -
        </button>
      </div>
    );
  }
}
