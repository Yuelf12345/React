import React, { Component } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import Detail from './Detail'
export default class Message extends Component {
	state = {
		messageList: [
			{ id: '001', title: "消息1" },
			{ id: '002', title: "消息2" },
			{ id: '003', title: "消息3" },
		]
	}
	render() {
		const { messageList } = this.state
		return (
			<div>
				<h2>message</h2>
				<ul>
					{
						messageList.map(i => {
							return (
								<li key={i.id}>
									{/* serach传参 */}
									{/* <Link to={`detail/?id=${i.id}&title=${i.title}`} >{i.title}</Link> */}
									{/* params传参 userParams接收 */}
									{/* <Link to={`detail/${i.id}/${i.title}`} >{i.title}</Link> */}
									{/* state传参 useLocation  */}
									<Link to="detail" state={
										{
											id: i.id,
											title: i.title
										}}>{i.title}</Link>
								</li>
							)
						})
					}
				</ul>
				<Routes>
					{/* <Route path='detail' element={<Detail></Detail>}></Route> */}
					{/* <Route path='detail/:id/:title' element={<Detail></Detail>}></Route> */}
					<Route path='detail' element={<Detail></Detail>}></Route>
				</Routes>
			</div>
		)
	}
}
