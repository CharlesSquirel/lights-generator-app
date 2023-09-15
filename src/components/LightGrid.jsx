import React from 'react';
import style from './LightGrid.module.css';
import SingleLight from './SingleLight';

const LightGrid = ({ countRows, countColumns, countLights }) => {
  const gridTemplateColumns = `repeat(${countColumns}, 1fr)`;
  const gridTemplateRows = `repeat(${countRows}, 1fr)`;
  const lights = new Array(countLights).fill("singleLight");

  return (
    <section className={style.container} style={{ gridTemplateColumns, gridTemplateRows }}>
      {lights.map((light, index) => (
        <SingleLight key={index} />
      ))}
    </section>
  );
};

export default LightGrid;
