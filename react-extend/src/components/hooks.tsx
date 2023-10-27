import React from 'react'
// import ReactDOM from 'react-dom';
// import {createRoot } from 'react-dom/client';

import { root } from '..'
// 命名 首字母大写或者加use前缀
export default function useHooks() {
  // useState
  const [count, setCount] = React.useState(0)
  const [name, setName] = React.useState('张三')
  // console.log(count,setCount );
  const handleAdd = () => {
    // setCount(count+1)
    setCount(count => count + 1)
  }
  const handleChangeName = () => {
    setName(name => {
      return name == '张三' ? '李四' : '张三'
    })
  }


  // useEffect
  React.useEffect(() => {
    console.log('定时器');
    let timer = setInterval(() => { setCount(count + 1) }, 1000)
    // componentWillUnmount 
    return () => {
      clearInterval(timer)
    }
  }, [count])
  const handleUnMount = () => {
    // ReactDOM.unmountComponentAtNode(document.getElementById('root') as HTMLElement);
    // const root = createRoot(document.getElementById('root') as HTMLElement);
    root.unmount()
  }


  // useRef

  const myRef = React.useRef<any>()
  const handleShow = () => {
    console.log(myRef.current.value);

  }
  return (
    <div>
      <h2>hooks</h2>
      <div>当前值:{count}</div>
      <button onClick={handleAdd}>+1</button><br />
      <button onClick={handleUnMount}>卸载</button><br />
      <div> {name}</div>
      <button onClick={handleChangeName}>changeName</button>
      <input type="text" ref={myRef} />
      <button onClick={handleShow}>show</button>

    </div>
  )
}
