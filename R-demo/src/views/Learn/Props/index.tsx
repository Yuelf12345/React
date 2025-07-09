import Style from './index.module.less'
import { Button } from "antd";
import { useState, forwardRef, useImperativeHandle, useRef } from 'react'
const Parent = () => {
  const childRef = useRef<{ event: () => void }>(null);
  return (
    <div className={Style.parent}>
      <h1>props</h1>
      <Child msg="parent msg" onEvent={(data: number) => console.log('event' + data)} />
      <h6>ref</h6>
      <Child2 ref={childRef} msg="parent msg" />
      <Button onClick={() => childRef.current?.event()}>click</Button>
    </div>
  )
}
const Child2 = forwardRef<{ event: () => void }, { msg: string }>((props, ref) => {
  const [num, setNum] = useState(0)
  useImperativeHandle(ref, () => ({
    event: () => {
      console.log("Child event");
      setNum(num + 1)
    },
  }));
  return (
    <div>
      <Button onClick={() => setNum(num + 1)}>child2</Button>
      child2{num}
      {props.msg}
    </div>
  )
})
const Child = ({ msg, onEvent }: { msg: string, onEvent: (msg: number) => void }) => {
  const [num, setNum] = useState(0)
  const e = () => {
    setNum(num + 1)
    onEvent(num)
  }

  return (
    <div>
      <h1>child</h1>
      props: {msg}
      <Button onClick={e}>{num}</Button>
    </div>
  )
}

const Props = () => {
  return (
    <>
      <div>Props</div>
      <Parent /></>
  )
}
export default Props;