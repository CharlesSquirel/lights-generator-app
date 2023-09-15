import React, { useState } from "react";
import lightOff from "./icons/light-off.svg";
import lightGreen from "./icons/light-green.svg";
import lightBlue from "./icons/light-blue.svg";
import lightOrange from "./icons/light-orange.svg";
import lightPink from "./icons/light-pink.svg";
import lightRed from "./icons/light-red.svg";
import lightYellow from "./icons/light-yellow.svg";

const lights = [].concat(lightGreen, lightBlue, lightOrange, lightPink, lightRed, lightYellow)

const SingleLight = () => {
  const [isLightOn, setIsLightOn] = useState(false);
  const [lightSwitched] = useState(lights[Math.floor(Math.random() * lights.length)])

  const handleOnClick = () => {
    setIsLightOn(!isLightOn);
  };
  return <img src={isLightOn ? lightSwitched : lightOff} alt="Light buble" onClick={handleOnClick}  />;
};

export default SingleLight;
