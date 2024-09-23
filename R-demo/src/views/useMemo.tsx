import { useMemo, useState } from "react";

const Memo: React.FC = () => {
  const [count, setCount] = useState(0);
  const doubleCount = useMemo(() => {
    return count * 2;
  }, [count]);
  console.log("doubleCount", doubleCount);
  return (
    <>
      <h2>useMemo</h2>
      <div>count: {count}</div>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <div>doubleCount: {doubleCount}</div>
    </>
  );
};

export default Memo;
