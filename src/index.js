import React from "react";
import ReactDOM from "react-dom/client";
import Demo from "./Component/Demo";
// Nội dung toàn bộ của website sẽ được chứa trong hàm render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Demo />
    <Demo />
    <Demo />
    <Demo />
  </div>
);
