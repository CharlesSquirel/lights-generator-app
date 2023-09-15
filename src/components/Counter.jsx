import IconAdd from "./icons/IconAdd";
import IconMinus from "./icons/IconMinus";
import style from "./Counter.module.css";
import { useState } from "react";

const Counter = ({ text }) => {
  const [count, setCount] = useState(0);
  const handleCountDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const handleCountIncrease = () => {
    if (count > 0) {
      setCount(count + 1);
    }
  };
  return (
    <div className={style.nav}>
      <p>
        {count} {text}
      </p>
      <div className={style.iconBox}>
        <IconMinus onClick={handleCountDecrease} />
        <IconAdd onClick={handleCountIncrease} />
      </div>
    </div>
  );
};

export default Counter;
