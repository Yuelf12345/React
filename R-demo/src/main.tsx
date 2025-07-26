import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// 全局样式
import "@/assets/styles/global.less";

// 路由
import { BrowserRouter } from "react-router-dom";

// 状态管理
import { Provider } from "react-redux";
import store from "@/store";


import small from "@/assets/small.png";
import big from "@/assets/big.png";

console.log(small);
console.log(big);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

