import {
    createSlice,//创建切片

} from '@reduxjs/toolkit'
export const user = createSlice({
    name:'user', //每个切片的名字
    initialState:{ //默认数据
       username:'张三',
       password:123,
       remember:true
    },
    reducers:{ //改变action的方法   action:{payload:接受传进来的值}
        userLogin:(state,{payload})=>{
            state.username = payload.username
            console.log(state.username);
        }
    },
    extraReducers:{ //引入其他方法  额外触发其他切片slice中的关联状态
        // [引入的方法](state,{payload}) = >{
             //先掉引入的方法
            //  触发本页面的 redux
        // }

    }
})

export const {userLogin} = user.actions; //公开action的方法 方便页面引入

export default user.reducer   //暴露reducer
