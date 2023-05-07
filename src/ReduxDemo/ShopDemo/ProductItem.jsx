import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCartAction } from "../../redux/reducers/cartReducer";
class ProductItem extends Component {
  render() {
    let { item } = this.props;
    return (
      <div className="card">
        <img src={item.image} alt="" className="w-100" />
        <div className="card-body">
          <h3>{item.name}</h3>
          <p>{item.price}</p>
          <button
            className="btn btn-dark"
            onClick={() => {
              // const action = {
              //   type: "cartReducer/addToCartAction",
              //   payload: item,
              // };
              const action = addToCartAction(item);
              // dùng hàm this.props.dispatch
              this.props.dispatch(action);
            }}
          >
            Add to cart <i className="fa fa-cart-plus"></i>
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(ProductItem);
