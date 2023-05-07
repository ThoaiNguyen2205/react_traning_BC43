import React, { Component } from "react";
import Child from "./Child";

export default class ReactLifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
      like: 1,
      objLike: {
        like: 1,
      },
    };
    console.log("constructor");
  }

  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps");
    return null;
  }
  shouldComponentUpdate() {
    return true;
  }
  render() {
    console.log("render");
    return (
      <div className="container">
        <h3>Number : {this.state.number}</h3>
        <button
          className="btn btn-success"
          onClick={() => {
            this.setState({
              number: this.state.number + 1,
            });
          }}
        >
          +
        </button>
        <Child objLike={this.state.objLike} />
        <i
          onClick={() => {
            let newObjLike = this.state.objLike;
            newObjLike.like += 1;
            this.setState({
              objLike: { ...newObjLike },
            });
          }}
          className="fa fa-heart text-danger display-4"
          style={{ cursor: "pointer" }}
        ></i>
      </div>
    );
  }
  timeout = {};
  componentDidMount() {
    this.timeout = setInterval(() => {
      console.log("server reponse");
    }, 1000);
    // Call api
    // Chỉ chạy 1 lần sau render
    console.log("componentDidMount ");
  }
  componentDidUpdate(prevProps, prevState) {
    // chạy sau render mỗi lần state hoặc props thay đổi
    console.log("componentDidUpdate");
  }
  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }
  componentWillUnmount() {
    // clear đi các hàm chạy ngầm của component trước khi componetn mất khỏi giao diện
    clearInterval(this.timeout);
  }
}
