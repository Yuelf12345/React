import { useState, useCallback } from "react";
const Callback: React.FC = () => {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  return (
    <>
      <Child onClick={handleClick} />
      <span>Count: {count}</span>
    </>
  );
};

const Child: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return <button onClick={onClick}>Click Me</button>;
};

export default Callback;
