import {
    createSlice,//创建切片
    createAsyncThunk,//创建一个一步的Action 有三个状态  pending（等待） fulfilled(成功) rejected（失败）
} from '@reduxjs/toolkit'
export const user = createSlice({
    name:'test', //每个切片的名字
    initialState:{ //默认数据
       count:1
    },
    reducers:{ //改变action的方法   action:{payload:接受传进来的值}
        add:(state,{payload})=>{
            state.count = state.count+payload.value
        }
    },
    extraReducers:{ //引入其他方法  额外触发其他切片slice中的关联状态
        // [引入的方法](state,{payload}) = >{
             //先掉引入的方法
            //  触发本页面的 redux
        // }

    }
})

export const {add} = user.actions; //公开action的方法 方便页面引入

export default user.reducer   //暴露reducer
