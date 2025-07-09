import {
  useRef,
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import Style from "./index.module.less";
import { Button } from "antd";

// 定义 Child 组件的 props 类型
interface ChildProps {
  content: string;
  onEvent: (data: {
    time: number;
  }) => void; // 接收一个函数作为 props
}

// 使用 forwardRef 将 Child 组件包装起来，以便父组件可以访问它的实例
const Child = forwardRef<{ event: () => void }, ChildProps>((props, ref) => {
  const { content, onEvent } = props;
  const [num, setNum] = useState(0);
  //   子组件通过 ref 暴露一个方法给父组件调用
  //   useImperativeHandle 允许你自定义暴露给父组件的实例值
  useImperativeHandle(ref, () => ({
    event: () => {
      console.log("Child event");
      setNum(num + 1)
    },
  }));

  const sendData = () => {
    onEvent({ time: Date.now() });
  };

  return (
    <div>
      <h4>Child</h4>
      <Button onClick={sendData}>Child event</Button>
      <p>{content}</p>
      Parent event:{num}
    </div>
  );
});

const Parent = () => {
  const ChildRef = useRef<{ event: () => void }>(null);

  const [time, setTime] = useState<number>(Date.now());

  //   父掉子组件方法
  const handleClick = () => {
    console.log("Parent event");
    ChildRef.current?.event();
  };

  //   子掉父组件方法 传数据
  const handleChildEvent = (data: {
    time: number;
  }) => {
    console.log("Received data from child:", data);
    setTime(data.time);
  };

  return (
    <div>
      <h3>Parent</h3>
      <p>Time: {time}</p>
      <Button onClick={handleClick}>Parent event</Button>
      <Child
        ref={ChildRef}
        content="Child content"
        onEvent={handleChildEvent}
      />
    </div>
  );
};

// 父子组件eventBus通信
interface EventData {
  time: number;
  content?: string; // 可选属性，用于parentEvent
}
type Events = {
  childEvent: EventData;
  parentEvent: { content: string };
};
import mitt from "mitt";
// 创建事件总线实例
const eventBus = mitt<Events>();
const Child1 = () => {
  const [content, setContent] = useState<string>("Child content");

  useEffect(() => {
    const handleChildEvent = (data: Events['parentEvent']) => {
      console.log("Received data from child:", data);
      setContent(data.content);
    };

    // 订阅事件
    eventBus.on("parentEvent", handleChildEvent);

    // 清理订阅
    return () => {
      eventBus.off("parentEvent", handleChildEvent);
    };
  }, []);

  const handleClick = () => {
    eventBus.emit("childEvent", { time: Date.now() });
  };

  return (
    <div>
      <h4>Child</h4>
      <Button onClick={handleClick}>Child event</Button>
      <p>{content}</p>
    </div>
  );
};
const Parent1 = () => {
  const [time, setTime] = useState<number>(Date.now());
  useEffect(() => {
    const handleChildEvent = (data: Events['childEvent']) => {
      console.log("Received data from child:", data);
      setTime(data.time);
    };

    // 订阅事件
    eventBus.on("childEvent", handleChildEvent);

    // 清理订阅
    return () => {
      eventBus.off("childEvent", handleChildEvent);
    };
  }, []);

  const handleClick = () => {
    console.log("Parent event");
    eventBus.emit("parentEvent", { content: "Child content from Parent" });
  };

  return (
    <div>
      <h3>Parent</h3>
      <p>Time: {time}</p>
      <Button onClick={handleClick}>Parent event</Button>
      <Child1 />
    </div>
  );
};

const Content = () => {
  return (
    <>
      <div className={Style.content}>
        <h2>父子组件props通信</h2>
        <Parent />
      </div>
      <div className={Style.content}>
        <h2>父子组件eventBus通信</h2>
        <Parent1 />
      </div>
    </>
  );
};

export default Content;
