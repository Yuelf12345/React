import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter";

// configureStore创建一个redux数据仓库
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// 导出仓库
export default store;
