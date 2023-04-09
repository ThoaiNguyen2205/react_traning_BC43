import React, { Component } from "react";

export default class Post extends Component {
  render() {
    //Lấy ra gái trị các obj truyền vào thông qua thuộc tính info
    //this.props.children:là props đặc biệt dùng để hiển thị nội dung innerHTML của thẻ <Component/>
    let { info, children, TheBaiTap } = this.props;
    return (
      <div className="bg-dark p-3 text-white">
        <h3>{info.tieuDe}</h3>
        <p>{info.noiDung}</p>
        {children}
        <TheBaiTap />
      </div>
    );
  }
}
// ReactElement:<The/>
//ReactComponent: import Component from '...'
