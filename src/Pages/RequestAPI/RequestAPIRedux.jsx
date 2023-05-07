import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import {
  getAllproductActionApi,
  getDataProductAction,
} from "../../redux/reducers/productReducer";

class RequestAPIRedux extends Component {
  getAllProduct = async () => {
    /*
        action={
            type:'productReducer/getDataProductAction',
            payload:[{...},{...}]
        }
        actionLoai2=(dispatch2)=>{
            // Xử lý acb =>result=> tạo action loại 1 đẩy lên redux
        }
    
    */
    const action = getAllproductActionApi();
    this.props.dispatch(action);
  };
  render() {
    return (
      <div>
        <div className="container">
          <h3>Shoes shop</h3>
          <div className="row">
            {this.props.arrProduct.map((item) => {
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
    console.log(this.props);
    this.getAllProduct();
  }
}

const mapStateToProps = (state) => ({
  arrProduct: state.productReducer.arrProduct,
});

export default connect(mapStateToProps)(RequestAPIRedux);
