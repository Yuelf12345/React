import React from "react";
import { useAppSelector } from '@/store';
import { selectCounter } from '@/store/features/counter';

interface Page2Props {}
const Page2: React.FC<Page2Props> = () => {
  const { count } = useAppSelector(selectCounter);
  return (
    <div>Page2: {count}</div>
  )
};

export default Page2;