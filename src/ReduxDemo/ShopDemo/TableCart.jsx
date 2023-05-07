import React, { Component } from "react";
import { connect } from "react-redux";
import {
  delProductAction,
  changeQuantityAction,
} from "../../redux/reducers/cartReducer";

class TableCart extends Component {
  render() {
    let { cart, dispatch } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>image</th>
            <th>name</th>
            <th>price</th>
            <th>quantity</th>
            <th>total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => {
            return (
              <tr key={index}>
                <th>{item.id}</th>
                <th>
                  <img src={item.image} alt="" width={50} height={50} />
                </th>
                <th>{item.name}</th>
                <th>{item.price} $</th>
                <th>
                  <button
                    className="btn btn-primary mx-2"
                    onClick={() => {
                      const action = changeQuantityAction({
                        id: item.id,
                        quantity: 1,
                      });
                      this.props.dispatch(action);
                    }}
                  >
                    +
                  </button>
                  {item.quantity}
                  <button
                    className="btn btn-primary mx-2"
                    onClick={() => {
                      const action = changeQuantityAction({
                        id: item.id,
                        quantity: -1,
                      });
                      this.props.dispatch(action);
                    }}
                  >
                    -
                  </button>
                </th>
                <th>{item.quantity * item.price}</th>
                <th>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      // Gửi action chứa id lên để reducer xử lý
                      const action = delProductAction(item.id);
                      // action={type:'cartReducer/delproductAction',payload:item,id}
                      this.props.dispatch(action);
                    }}
                  >
                    x
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cartReducer.cart,
});

export default connect(mapStateToProps)(TableCart);
