//redux toolkit => reduxslice
//rxslice
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  maNhanVien: "0001",
  tenNhanVien: "Nguyễn Văn A",
  luongCoBan: "1000",
};

const nhanVienReducer = createSlice({
  name: "nhanVienReducer", // tên reducer
  initialState, //state mặc định
  reducers: {
    // các hàm xử lý action
    changeInfo: (state, action) => {
      let { id, value } = action.payload;
      state[id] = value;

      //return {...state}
    },
  },
});

export const { changeInfo } = nhanVienReducer.actions;

export default nhanVienReducer.reducer;
