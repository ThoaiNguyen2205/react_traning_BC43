import { configureStore } from "@reduxjs/toolkit";
import nhanVienReducer from "./reducers/nhanVienReducer";
import cartReducer from "./reducers/cartReducer";
import productReducer from "./reducers/productReducer";

export const store = configureStore({
  reducer: {
    number: (state = 15, action) => {
      if (action.type === "TANG_GIAM_SOLUONG") {
        state = state + 1;
      }
      return state;
    },
    color: (state = "red", action) => {
      return state;
    },
    imgCar: (state = "./img/red-car.jpg", action) => {
      if (action.type === "CHANGE_COLOR") {
        state = action.payload;
      }
      return state;
    },
    nhanVienReducer: nhanVienReducer,
    cartReducer: cartReducer,
    productReducer: productReducer,
  },
});
