import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../../store/reducer/user'; //引入定义的方法

const Redux = () => {
  const { count } = useSelector((state: any) => state.user)
  
  const dispatch = useDispatch()
  console.log(dispatch);
  
  const addValue =()=>{
    dispatch(add({value:4}))
  }
  return (
    <div>
      <h2>Redux</h2>
      {count}
      <button onClick={addValue}>+4</button>
    </div>
  )
}
export default Redux
