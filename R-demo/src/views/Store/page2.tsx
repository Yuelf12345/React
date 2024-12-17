import React from "react";
import { Button } from "antd";
import { useAppSelector, useAppDispatch} from '@/store';
import { selectCounter,doubleCount } from '@/store/features/counter';

interface Page2Props {}
const Page2: React.FC<Page2Props> = () => {
  const { count } = useAppSelector(selectCounter);
    const dispatch = useAppDispatch();
  return (
    <div>
      <h1>Page2</h1>
      <p>count= {count}</p>
      <Button type="primary" onClick={() =>dispatch(doubleCount())}>*2</Button>
    </div>
  )
};

export default Page2;