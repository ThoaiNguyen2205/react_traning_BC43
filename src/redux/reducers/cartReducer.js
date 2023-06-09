import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    {
      id: 1,
      name: "Adidas Prophere",
      price: 350,
      quantity: 1,
      image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
    },
  ],
};

const cartReducer = createSlice({
  name: "cartReducer",
  initialState,
  reducers: {
    addToCartAction: (state, action) => {
      //immutable redux: tính bất biến
      // state.cart.push(action.payload);
      // Xử lý nghiệp vụ thêm giỏ hàng
      let productClick = { ...action.payload };
      productClick.quantity = 1;
      // Kiểm tra có trong giỏ hàng chưa,nếu chưa có thì thêm vào nếu có rồi thì tăng số lượng
      let prodCart = state.cart.find((pro) => pro.id == productClick.id);
      if (prodCart) {
        prodCart.quantity += 1;
      } else {
        state.cart.push(productClick);
      }
    },
    delProductAction: (state, action) => {
      console.log("action", action);
      let id = action.payload;
      let indexDel = state.cart.findIndex((prod) => prod.id === id);
      if (indexDel !== -1) {
        //Xử lý xoá
        state.cart.splice(indexDel, 1);
      }
    },
    changeQuantityAction: (state, action) => {
      let { id, quantity } = action.payload;
      let prodCart = state.cart.find((pro) => pro.id === id);
      if (prodCart) {
        prodCart.quantity += quantity;
      }
    },
  },
});

export const { addToCartAction, delProductAction, changeQuantityAction } =
  cartReducer.actions;

export default cartReducer.reducer;
