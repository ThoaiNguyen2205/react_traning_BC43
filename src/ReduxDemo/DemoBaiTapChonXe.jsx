//rcredux ra component có kết nối vs redux
import React, { Component } from "react";
import { connect } from "react-redux";
// bỏ chữ export
class DemoBaiTapChonXe extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <h1>bài tập chọn xe</h1>
        <div className="row">
          <div className="col-6">
            <img className="w-100" src={this.props.imgCar} alt="" />
          </div>
          <div className="col-6">
            <button
              onClick={() => {
                // Dữ liệu gởi lên store
                //tạo ra action
                const action = {
                  type: "CHANGE_COLOR",
                  payload: "./img/red-car.jpg",
                };
                // Dùng hàm dispatch đưa dữ liệu lên redux
                this.props.dispatch(action);
              }}
              className="mx-2 btn text-white"
              style={{ background: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => {
                // Dữ liệu gởi lên store
                //tạo ra action
                const action = {
                  type: "CHANGE_COLOR",
                  payload: "./img/black-car.jpg",
                };
                // Dùng hàm dispatch đưa dữ liệu lên redux
                this.props.dispatch(action);
              }}
              className="mx-2 btn text-white"
              style={{ background: "black" }}
            >
              Black
            </button>
            <button
              onClick={() => {
                // Dữ liệu gởi lên store
                //tạo ra action
                const action = {
                  type: "CHANGE_COLOR",
                  payload: "./img/steel-car.jpg",
                };
                // Dùng hàm dispatch đưa dữ liệu lên redux
                this.props.dispatch(action);
              }}
              className="mx-2 btn text-white"
              style={{ background: "#EEE" }}
            >
              Steel
            </button>
            <button
              onClick={() => {
                // Dữ liệu gởi lên store
                //tạo ra action
                const action = {
                  type: "CHANGE_COLOR",
                  payload: "./img/silver-car.jpg",
                };
                // Dùng hàm dispatch đưa dữ liệu lên redux
                this.props.dispatch(action);
              }}
              className="mx-2 btn text-white"
              style={{ background: "silver" }}
            >
              Silver
            </button>
          </div>
        </div>
      </div>
    );
  }
}
// Bỏ hàm mapDispatchToProps
// hàm lấy state từ redux về biến thành props component
const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(DemoBaiTapChonXe);
