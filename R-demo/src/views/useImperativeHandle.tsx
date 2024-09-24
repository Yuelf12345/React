import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { Input } from "antd";
import type { InputRef } from "antd";

type CustomInputProps = {
  value?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
interface CustomInputHandle {
  focus?: () => void;
}

const CustomInput = forwardRef<CustomInputHandle, CustomInputProps>(
  (props, ref) => {
    console.log("props", props);
    const inputRef = useRef<InputRef | null>(null);
    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current!.focus();
      },
    }));

    return (
      <>
        <Input
          ref={inputRef}
          type="text"
          value={props.value}
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
      </>
    );
  }
);

const ImperativeHandle: React.FC = () => {
  const inputRef = useRef<InputRef | null>(null);
  const [value, setValue] = useState("初始值");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleFocus = () => {
    inputRef.current!.focus();
  };
  return (
    <div>
      <CustomInput
        ref={inputRef}
        value={value}
        placeholder="请输入内容"
        onChange={handleChange}
      />
      <button onClick={handleFocus}>聚焦</button>
    </div>
  );
};

export default ImperativeHandle;
