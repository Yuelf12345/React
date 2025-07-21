import { useState, useEffect } from 'react';
import { Button } from 'antd';
const CountDown = () => {
  const [count, setCount] = useState(10);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  const handlePause = () => {
    if (timer) {
      clearInterval(timer);
      setTimer(null);
    }
  };
  const handleContinue = () => {
    if (!timer) {
      const interval = setInterval(() => {
        setCount(prev => prev > 0 ? prev - 1 : 0);
      }, 1000);
      setTimer(interval);
    }
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);
    setTimer(interval);

    return () => clearInterval(interval);
  }, []); // 空依赖表示只在挂载时执行
  return (
    <><div>
      {count}
      <Button onClick={handlePause}>pause</Button>
      <Button onClick={handleContinue}>continue</Button>
    </div></>
  )
};
export default CountDown;