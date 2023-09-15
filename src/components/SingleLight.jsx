import React, { useState } from "react";
import lightOff from "./icons/light-off.svg";
import lightOn from "./icons/light-on.svg";

const SingleLight = ({ color }) => {
  const [isLightOn, setIsLightOn] = useState(false);
  const handleOnClick = () => {
    setIsLightOn(!isLightOn);
  };
  return <img src={isLightOn ? lightOn : lightOff} alt="Light buble" onClick={handleOnClick} color={color} />;
};

export default SingleLight;
