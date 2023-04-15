import React from "react";
import ReactDOM from "react-dom/client";
import Demo from "./Component/Demo";
import DemoClass from "./Component/DemoClass";
import Header from "./Component/HomeComponent/Header";
import Home from "./Component/HomeComponent/Home";
import Databinding from "./DataBinding/Databinding";
import HandleEvent from "./Component/HandleEvent/HandleEvent";
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
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeTemplate from "./Templates/HomeTemplate";
// Nội dung toàn bộ của website sẽ được chứa trong hàm render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route index element={<Home />}></Route>
          <Route path="cart" element={<ProductDetail />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
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
