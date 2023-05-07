import React, { Component } from "react";
import { store } from "../redux/configStore";
import { connect } from "react-redux";
class DemoTangGiamSoLuong extends Component {
  render() {
    return (
      <div className="container">
        <h1>Number : {store.getState().number}</h1>
        <button
          className="btn btn-dark mx-2"
          onClick={() => {
            // action là dữ liệu sẽ gửi lên redux store
            const action = {
              type: "TANG_GIAM_SOLUONG",
              payload: 1,
            };
            // Dung phương thức dispath gửi dữ liệu lên redux
            store.dispatch(action);
          }}
        >
          +
        </button>
        <button className="btn btn-dark">-</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};
const ComponentWithRedux = connect(mapStateToProps)(DemoTangGiamSoLuong);
export default ComponentWithRedux;
