import IconAdd from "./icons/IconAdd";
import IconMinus from "./icons/IconMinus";
import style from "./Counter.module.css";

const Counter = ({ text, count, setCount}) => {
    const handleCountDecrease = () => {
        if (count > 0) {
          setCount(count - 1);
        }
      };
  const handleCountIncrease = () => {
    if (text === "columns" && count >= 9) {
        return
    }
    if (count >= 0) {
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
