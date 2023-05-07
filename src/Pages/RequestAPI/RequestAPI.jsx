import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
class RequestAPI extends Component {
  state = {
    arrProduct: [],
  };
  getAllProduct = async () => {
    //gọi api
    let result = await axios({
      url: "https://shop.cyberlearn.vn/api/Product",
      method: "GET",
    });
    console.log("result", result.data); // result.data.content = [{},{}]
    this.setState({
      arrProduct: result.data.content,
    });
  };
  render() {
    return (
      <div>
        <div className="container">
          <h3>Shoes shop</h3>
          <div className="row">
            {this.state.arrProduct.map((item) => {
              return (
                <div className="col-4" key={item.id}>
                  <div className="card">
                    <img src={item.image} alt="" />
                    <div className="card-body">
                      <h3>{item.name}</h3>
                      <p>{item.price}</p>
                      <button className="btn btn-dark">
                        <i className="fa fa-cart-plus"></i> Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
  //life-circle mouting: chỉ chạt 1 lần đầu tiên sau khi hàm render chạy xong
  componentDidMount() {
    this.getAllProduct();
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(RequestAPI);
