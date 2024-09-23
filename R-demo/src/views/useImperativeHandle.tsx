import { forwardRef, useImperativeHandle, useRef } from "react";
import { Input } from "antd";
import type { InputRef } from "antd";

const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef<InputRef | null>(null);
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current!.focus();
    },
  }));

  return <Input type="text" placeholder="请输入内容" ref={inputRef} />;
});

const ImperativeHandle: React.FC = () => {
  const inputRef = useRef<InputRef | null>(null);
  return (
    <div>
      <CustomInput ref={inputRef} />
      <button onClick={() => inputRef.current!.focus()}>聚焦</button>
    </div>
  );
};

export default ImperativeHandle;
