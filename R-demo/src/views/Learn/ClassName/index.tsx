import { Button } from "antd";
import { useState } from "react";
import classnames from "classnames";
import Style from "./index.module.less";

const ClassName = () => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <div>
      <h4
        className={classnames({
          [Style.active]: isActive,
        })}
      >
        ClassName
      </h4>
      <Button type="primary" onClick={handleClick}>
        Change
      </Button>
    </div>
  );
};

export default ClassName;
