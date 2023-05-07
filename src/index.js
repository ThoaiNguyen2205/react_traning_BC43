import React from "react";
import ReactDOM from "react-dom/client";
import Demo from "./Components/Demo";
import DemoClass from "./Components/DemoClass";
import Header from "./Components/HomeComponent/Header";
import Home from "./Components/HomeComponent/Home";
import Databinding from "./DataBinding/Databinding";
import HandleEvent from "./Components/HandleEvent/HandleEvent";
import DemoLogin from "./State/DemoLogin";
import DemoState from "./State/DemoState";
import StyleDemo from "./StyleDemo/StyleDemo";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
import DemoPageLogin from "./State/DemoPageLogin";
import "./assets/scss/index.scss";
import DemoProps from "./Props/DemoProps";
import ProductList from "./Props/ProductList/ProductList";
import ProductDetail from "./Props/ProductDetail/ProductDetail";
// Cấu hình react router dom
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomeTemplate from "./Templates/HomeTemplate";
import BaitapChonXe from "./State/BaitapChonXe";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import ReactFormDemo from "./ReactFormDemo/ReactFormDemo";
import ReactLifeCycle from "./ReactLifeCycle/ReactLifeCycle";

//Cấu hình redux
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
import DemoTangGiamSoLuong from "./ReduxDemo/DemoTangGiamSoLuong";
import DemoBaiTapChonXe from "./ReduxDemo/DemoBaiTapChonXe";
import DemoFormNhanVien from "./ReduxDemo/DemoFormNhanVien";
import Homepage from "./ReduxDemo/ShopDemo/Homepage";
import Cart from "./Props/ProductDetail/Cart";
import CartPage from "./ReduxDemo/ShopDemo/CartPage";
import RequestAPI from "./Pages/RequestAPI/RequestAPI";
import RequestAPIRedux from "./Pages/RequestAPI/RequestAPIRedux";
// Nội dung toàn bộ của website sẽ được chứa trong hàm render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route index element={<Homepage />}></Route>
          <Route path="cart" element={<ProductDetail />}></Route>
          <Route path="cars" element={<BaitapChonXe />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="react-lifecycle" element={<ReactLifeCycle />}></Route>
          <Route path="*" element={<Navigate to={"/"} />}></Route>

          <Route path="react-form" element={<ReactFormDemo />}></Route>
          <Route path="redux-demo1" element={<DemoTangGiamSoLuong />}></Route>
          <Route path="redux-demo2" element={<DemoBaiTapChonXe />}></Route>
          <Route path="redux-demo3" element={<DemoFormNhanVien />}></Route>
          <Route path="home-page" element={<Homepage />}></Route>
          <Route path="cart-page" element={<CartPage />}></Route>
          <Route path="api" element={<RequestAPI />}></Route>
          <Route path="api-redux" element={<RequestAPIRedux />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

{
  /* <Home /> */
}
{
  /* <Databinding /> */
}
{
  /* <HandleEvent /> */
}
{
  /* <DemoLogin /> */
}
{
  /* <DemoState /> */
}
{
  /* <StyleDemo /> */
}
{
  /* <RenderWithMap /> */
}
{
  /* <DemoPageLogin /> */
}
{
  /* <DemoProps /> */
}
{
  /* <ProductList /> */
}
{
  /* <ProductDetail /> */
}
