import React, { Component } from "react";

const TITLE = "CYBERSOFT COMPONENT";
const renderInfo = (name, age) => {
  // Nội dung của hàm trả về trong jsx là primitive value (string, boolean, number,jsx)
  //   return `Xin chào ${name} - ${age} tuổi`;
  return <span>{`Xin chào ${name} -${age} tuổi`}</span>;
};

export default class Databinding extends Component {
  user = {
    userName: "Khai",
    password: 123,
  };
  render() {
    return (
      <div className="container">
        <h3 id="title">{TITLE}</h3>
        <p>{renderInfo("Tùng", 18)}</p>
        <div className="card w-25">
          <h3 className="card-header text-center bg-dark text-white">
            User info
          </h3>
          <div className="card-body">
            <p>Username</p>
            <input
              type="text"
              className="form-control"
              value={this.user.userName}
            />

            <p>Password</p>
            <input
              type="text"
              className="form-control"
              value={this.user.password}
            />
          </div>
        </div>
      </div>
    );
  }
}
