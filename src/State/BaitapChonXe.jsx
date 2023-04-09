import React, { Component } from "react";

export default class BaitapChonXe extends Component {
  state = {
    srcCar: "./img/black-car.jpg",
  };
  handleChangeColor = (color) => {
    this.setState({
      srcCar: `./img/${color}-car.jpg`,
    });
  };
  render() {
    return (
      <div className="container">
        <h3>Bài tập chọn xe</h3>
        <div className="row">
          <div className="col-6">
            <img src={this.state.srcCar} alt="" className="w-100" />
          </div>
          <div className="col-6">
            <button
              className="btn btn-dark mx-2"
              onClick={() => {
                this.handleChangeColor("black");
              }}
            >
              Black car
            </button>
            <button
              className="btn btn-danger mx-2"
              onClick={() => {
                this.handleChangeColor("red");
              }}
            >
              Red car
            </button>
            <button
              className="btn btn-light mx-2"
              onClick={() => {
                this.handleChangeColor("steel");
              }}
            >
              Steel car
            </button>
            <button
              className="btn btn-secondary mx-2"
              onClick={() => {
                this.handleChangeColor("silver");
              }}
            >
              Silver car
            </button>
          </div>
        </div>
      </div>
    );
  }
}
