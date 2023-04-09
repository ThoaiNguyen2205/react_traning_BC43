import React, { Component } from "react";
const dataPhone = [
  {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "./img/vsphone.jpg",
  },
  {
    maSP: 2,
    tenSP: "Meizu 16Xs",
    manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
    heDieuHanh: "Android 9.0 (Pie); Flyme",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 7600000,
    hinhAnh: "./img/meizuphone.jpg",
  },
  {
    maSP: 3,
    tenSP: "Iphone XS Max",
    manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
    heDieuHanh: "iOS 12",
    cameraSau: "Chính 12 MP & Phụ 12 MP",
    cameraTruoc: "7 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 27000000,
    hinhAnh: "./img/applephone.jpg",
  },
];
export default class ProductDetail extends Component {
  state = {
    spChiTiet: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
  };
  renderPhone = () => {
    let arrPhone = dataPhone.map((prod) => {
      return (
        <div className="col-md-4" key={prod.maSP}>
          <div className="card">
            <img src={prod.hinhAnh} alt="" />
            <div className="card-body">
              <h3>{prod.tenSP}</h3>
              <p>{prod.giaBan.toLocaleString()} VNĐ</p>
              <button
                className="btn btn-success"
                onClick={() => {
                  this.xemChiTiet(prod);
                }}
              >
                Xem chi tiết
              </button>
            </div>
          </div>
        </div>
      );
    });
    return arrPhone;
  };
  xemChiTiet = (spClick) => {
    this.setState({
      spChiTiet: spClick,
    });
  };
  render() {
    // let {
    //   maSP,
    //   tenSP,
    //   manHinh,
    //   heDieuHanh,
    //   cameraTruoc,
    //   cameraSau,
    //   ram,
    //   rom,
    //   giaBan,
    //   hinhAnh,
    // } = this.state.spChiTiet;
    return (
      <div className="container">
        <h3>Danh sách sản phẩm</h3>
        <div className="row">{this.renderPhone()}</div>
        <br />
        <div className="row" style={{ minHeight: 400 }}>
          <div className="col-md-3 text center">
            <h3 className="text-center">{this.state.spChiTiet.tenSP}</h3>
            <img src={this.state.spChiTiet.hinhAnh} alt="" className="w-100" />
          </div>
          <div className="col-9">
            <h3>Thông số kỹ thuật</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Màn hình</th>
                  <td>{this.state.spChiTiet.manHinh}</td>
                </tr>
                <tr>
                  <th>Hệ điều hành</th>
                  <td>{this.state.spChiTiet.heDieuHanh}</td>
                </tr>
                <tr>
                  <th>Camera trước</th>
                  <td>{this.state.spChiTiet.cameraTruoc}</td>
                </tr>
                <tr>
                  <th>Camera sau</th>
                  <td> {this.state.spChiTiet.cameraSau}</td>
                </tr>
                <tr>
                  <th>Ram</th>
                  <td>{this.state.spChiTiet.ram}</td>
                </tr>
                <tr>
                  <th>Rom</th>
                  <td>{this.state.spChiTiet.rom}</td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
