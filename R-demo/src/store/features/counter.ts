// src/store/features/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from '@/store';

const namespace = 'counter';

const initialState = {
  count: 0,
};

// 创建一个 Slice
export const counterSlice = createSlice({
  // 命名空间，name会作为action type的前缀
  name: namespace,

  // 初始化状态
  initialState,

  // 1、定义reducer更新状态的函数
  // 2、是组件中dispatch使用的actions函数
  reducers: {
    // 定义一个加的方法
    increment: (state) => {
      state.count += 1;
    },
    // 定义一个减的方法
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
    doubleCount: (state) => {
      state.count *= 2;
    },
  },
});

// createSlice 会自动生成与我们编写的 reducer 函数同名的 action creator。
// 导出actions函数
export const { increment, decrement, incrementByAmount, doubleCount } = counterSlice.actions;

export const selectCounter = (state: RootState) => state.counter;

// 导出reducer，创建store
export default counterSlice.reducer;
