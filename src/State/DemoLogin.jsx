import React, { Component } from "react";

export default class DemoLogin extends Component {
  //state: là thuộc tính của component để quản lý các biến thay đổi trên giao diện của 1 component
  state = {
    result: "default",
  };
  handleSubmit = (event) => {
    event.preventDefault();
    // this.state.result = "Đăng nhập thành công";// Không được thay đổi trực tiếp state vì giao diện sẽ không render lại.
    let newState = {
      result: "Đăng nhập thành công",
    };
    //this.setState: là phương thức có sẵn của component. Dùng để thay đổi giá trị state, đồng thời làm giao diện render lại giá trị state mới
    this.setState(newState);
  };
  render() {
    return (
      <div className="container">
        <form className="card w-25 mx-auto" onSubmit={this.handleSubmit}>
          <div className="card-header bg-dark text-white text-center">
            Login
          </div>
          <div className="card-body">
            <p>Username</p>
            <input type="text" className="form-control" id="username" />
            <p>Password</p>
            <input type="text" className="form-control" id="password" />
          </div>
          <div className="card-footer text-center">
            <button className="btn btn-success">Login</button>
          </div>
        </form>
        <div className="alert alert-success w-25 mx-auto" id="result">
          {this.state.result}
        </div>
      </div>
    );
  }
}
