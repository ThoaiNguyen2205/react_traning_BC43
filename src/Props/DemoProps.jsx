import React, { Component } from "react";
import TextDemo from "./TextDemo";
import Post from "./Post";
import BaitapChonXe from "../State/BaitapChonXe";
import DemoChangeFontSize from "../State/DemoChangeFontSize";

export default class DemoProps extends Component {
  render() {
    const post1 = {
      tieuDe: "Cybersoft và những người bạn",
      noiDung: "Lorem ipsum dolor sit amet ",
    };
    const post2 = {
      tieuDe: "Học react có khó không",
      noiDung: "Không hề dễ =]] ",
    };
    return (
      <div className="container">
        <div className="w-25">
          <TextDemo name="CyberSoft" price="1000" img="./img/red-car.jpg" />
        </div>
        <div className="w-25 mt-2">
          <TextDemo
            name="BC FrontEnd 43"
            price="2000"
            img="./img/black-car.jpg"
          />
        </div>
        <hr />
        <h3>Danh sách bào viết</h3>
        <Post info={post1} TheBaiTap={BaitapChonXe}>
          <div className="alert alert-success">Ghi chú 1</div>
        </Post>
        <Post info={post2} TheBaiTap={DemoChangeFontSize}>
          <div className="alert alert-danger">Ghi chú 2</div>
        </Post>
      </div>
    );
  }
}
