import React, { useState } from "react";
import { Button, InputNumber } from "antd";
// 引入相关的hooks
// import { useSelector, useDispatch } from "react-redux";
import { useAppSelector, useAppDispatch } from '@/store';
// 引入 counterSlice 中的 actions函数
import {
  increment,
  decrement,
  incrementByAmount,
  selectCounter
} from "@/store/features/counter";

interface Page1Props {}
const Page1: React.FC<Page1Props> = () => {
  const { count } = useAppSelector(selectCounter);
  const dispatch = useAppDispatch();

  const [step, setStep] = useState<number | null>(null);

  const handleStepChange = (val: number | null) => {
    setStep(val);
  };

  return (
    <>
      <h1>Page1</h1>
      <p>count = {count}</p>
      <Button type="primary" onClick={() => dispatch(increment())}>
        +1
      </Button>
      <Button onClick={() => dispatch(decrement())}>-1</Button>
      <InputNumber
        min={-100}
        max={100}
        changeOnWheel
        onChange={handleStepChange}
        value={step}
      />
      <button onClick={() => dispatch(incrementByAmount(step))}>+N</button>
    </>
  );
};

export default Page1;
