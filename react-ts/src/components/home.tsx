import React, { PureComponent } from 'react'
import { Routes, Route, Navigate, NavLink } from 'react-router-dom'
import Message from './Message'
import News from './News'

export default class Home extends PureComponent {
  render() {
    return (
          <div>
      <h2>Home组件内容</h2>
      <div>
        <ul className="nav nav-tabs">
          <li>
            {/* 嵌套路由的三种写法 */}
            {/* <NavLink className="list-group-item" to='/home/news'>News</NavLink> */}
            {/* <NavLink className="list-group-item" to='./news'>News</NavLink> */}
            <NavLink className="list-group-item" to='news'>News</NavLink>
          </li>
          <li>
            <NavLink className="list-group-item" to='/home/message'>Message</NavLink>
          </li>
        </ul>
        {/* 指定组件呈现的位置 */}
        <Routes>
          <Route path='news' element={<News></News>}></Route>
          <Route path='message/*' element={<Message></Message>}></Route>
          {/* <Route path='*' element={<Navigate to={'news'} replace></Navigate>}></Route> */}
        </Routes>
      </div>
    </div>
    )
  }
}
