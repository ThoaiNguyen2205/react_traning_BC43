import React, { Component } from "react";

export default class HandleEvent extends Component {
  handleClick = (event) => {
    // alert("hello cybersoft");
    event.target.className = "btn btn-danger";
  };
  render() {
    const handleEvent = (event) => {
      alert("hello thoai");
    };
    return (
      <div className="container">
        <h3>Handle event</h3>
        {/* cách định nghĩa function cho 1 sự kiện của 1 nút xử lý */}
        <button
          className="btn btn-success"
          onClick={(event) => {
            alert("hello");
          }}
        >
          Click me
        </button>
        <br />
        {/* Khi có nhiều nút xử lý cùng thực thi 1 chức năng thì ta có thể khai báo function riêng tại các biến hoặc thuộc */}
        <button className="btn btn-success" onClick={this.handleClick}>
          Click me
        </button>
        <br />
        <button className="btn btn-success" onClick={handleEvent}>
          Click me
        </button>
      </div>
    );
  }
}
