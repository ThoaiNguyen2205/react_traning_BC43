import React, { Component } from "react";

export default class Cart extends Component {
  renderGioHang = () => {
    let { arrGioHang, xoaSanPham, tangGiamSoLuong } = this.props;
    return arrGioHang.map((sp) => {
      return (
        <tr key={sp.maSP}>
          <td>{sp.maSP}</td>
          <td>{sp.tenSP}</td>
          <td>
            <img src={sp.hinhAnh} alt="" width={50} height={50} />
          </td>
          <td>{sp.giaBan}</td>
          <td>
            <button
              className="mx-2 btn btn-primary"
              onClick={() => {
                tangGiamSoLuong(sp.maSP, 1);
              }}
            >
              +
            </button>
            {sp.soLuong}
            <button
              className="mx-2 btn btn-primary"
              onClick={() => {
                tangGiamSoLuong(sp.maSP, -1);
              }}
            >
              -
            </button>
          </td>
          <td>{sp.giaBan * sp.soLuong}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                xoaSanPham(sp.maSP);
              }}
            >
              {" "}
              Xoá
            </button>
          </td>
        </tr>
      );
    });
  };
  //state??
  render() {
    let { arrGioHang } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <td>Mã sp</td>
            <td>Tên sp</td>
            <td>Hình ảnh</td>
            <td>Giá bán</td>
            <td>Số lượng</td>
            <td>Tổng tiền</td>
          </tr>
        </thead>
        <tbody>{this.renderGioHang()}</tbody>
      </table>
    );
  }
}
