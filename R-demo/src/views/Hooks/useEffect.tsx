import React, { useState, useEffect } from "react";

interface EffectProps {}

const Effect: React.FC<EffectProps> = () => {
  const [count, setCount] = useState<number>(0);
  const [doubleCount, setDoubleCount] = useState<number>(0);
  const [text, setText] = useState<string>("useEffect");

  useEffect(() => {
    console.log("页面更新执行");
    // setText('页面更新执行')
  });
  useEffect(() => {
    const fetchData = async () => {
      // await apiFn().then((res) => {
      //   setDoubleCount(res.data)
      // })
      console.log("异步执行");
      setText('doubleCount触发异步执行')
    };
    fetchData();
  }, [doubleCount]);
  useEffect(() => {
    console.log("只执行一次");
    // setText('只执行一次')
  }, []);
  useEffect(() => {
    console.log("count改变执行");
    setText('count改变执行')
  }, [count]);
  const incrementCount = (): void => {
    setCount(count + 1);
  };
  const incrementDoubleCount = (): void => {
    setDoubleCount(doubleCount + 2);
  };
  return (
    <>
      <h1>
        Effect - Counter: {count} doubleCount: {doubleCount}
      </h1>
      <h1>{text}</h1>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={incrementDoubleCount}>Increment</button>
    </>
  );
};

export default Effect;
