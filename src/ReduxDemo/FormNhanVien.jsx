import React, { Component } from "react";
import { connect } from "react-redux";
import { changeInfo } from "../redux/reducers/nhanVienReducer";

class FormNhanVien extends Component {
  handleChangeInput = (e) => {
    let { id, value } = e.target;
    // cách 1: action tạo tay
    // const action = {
    //   type: "nhanVienReducer/changeInfo",
    //   payload: {
    //     id,
    //     value,
    //   },
    // };

    //cách 2:
    const action = changeInfo({ id, value });

    //Đưa object {id,value} lên rudex
    this.props.dispatch(action);
  };
  render() {
    return (
      <form>
        <h3>Thông tin nhân viên</h3>
        <div className="form-group mt-2">
          <input
            className="form-control"
            id="maNhanVien"
            onInput={this.handleChangeInput}
          />
        </div>
        <div className="form-group mt-2">
          <input
            className="form-control"
            id="tenNhanVien"
            onInput={this.handleChangeInput}
          />
        </div>
        <div className="form-group mt-2">
          <input
            className="form-control"
            id="luongCoBan"
            onInput={this.handleChangeInput}
          />
        </div>
        <div className="form-group mt-2">
          <button className="btn btn-success" type="submit">
            Hiển thị
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(FormNhanVien);
