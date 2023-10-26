import { configureStore, createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'test', //每个切片的名字
    initialState: { //默认数据
        count: 1
    },
    reducers: { //改变action的方法   action:{payload:接受传进来的值}
        add: (state, { payload }) => {
            state.count = state.count + payload.value
        }
    },
    extraReducers: { //引入其他方法  额外触发其他切片slice中的关联状态
        // [引入的方法](state,{payload}) = >{
        //先掉引入的方法
        //  触发本页面的 redux
        // }

    }
})
export const { add } = counterSlice.actions;

export default configureStore({
    reducer: counterSlice.reducer, // 模块化管理redux数据
})