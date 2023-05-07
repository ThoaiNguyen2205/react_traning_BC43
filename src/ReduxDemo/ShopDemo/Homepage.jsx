import React, { Component } from "react";
import { connect } from "react-redux";
//import danh sách sản phẩm
import { arrProduct } from "../../assets/data/data";
import ProductItem from "./ProductItem";
class Homepage extends Component {
  renderProduct = () => {
    return arrProduct.map((prod, index) => {
      return (
        <div className="col-3" key={index}>
          <ProductItem renderProduct={this.renderProduct} item={prod} />
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Product List</h1>
        <div className="row">{this.renderProduct()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Homepage);
