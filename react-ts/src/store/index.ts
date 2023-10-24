import { configureStore } from '@reduxjs/toolkit'
import user from './reducer/user'
 
// 使用configureStore创建redux
export default configureStore({
    reducer:{
        user, // 模块化管理redux数据
    }
})