import { useRef, useState, forwardRef, useImperativeHandle } from "react";

// 定义 Child 组件的 props 类型
interface ChildProps {
  content: string;
  onEvent: (data: any) => void; // 接收一个函数作为 props
}

// 使用 forwardRef 将 Child 组件包装起来，以便父组件可以访问它的实例
const Child = forwardRef<{ event: () => void }, ChildProps>((props, ref) => {
  const { content, onEvent } = props;

  //   子组件通过 ref 暴露一个方法给父组件调用
  //   useImperativeHandle 允许你自定义暴露给父组件的实例值
  useImperativeHandle(ref, () => ({
    event: () => {
      console.log("Child event");
    },
  }));

  const sendData = () => {
    onEvent({ time: Date.now() });
  };

  return (
    <div>
      <h4>Child</h4>
      <button onClick={sendData}>Child event</button>
      <p>{content}</p>
    </div>
  );
});

const Parent = () => {
  const ChildRef = useRef<any>(null);

  const [time, setTime] = useState<number>(Date.now());

  //   父掉子组件方法
  const handleClick = () => {
    console.log("Parent event");
    ChildRef.current.event();
  };

  //   子掉父组件方法 传数据
  const handleChildEvent = (data: any) => {
    console.log("Received data from child:", data);
    setTime(data.time);
  };

  return (
    <div>
      <h3>Parent</h3>
      <p>Time: {time}</p>
      <button onClick={handleClick}>Parent event</button>
      <Child
        ref={ChildRef}
        content="Child content"
        onEvent={handleChildEvent}
      />
    </div>
  );
};

export default Parent;
