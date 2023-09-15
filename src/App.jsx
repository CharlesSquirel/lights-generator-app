import { useEffect, useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import LightGrid from "./components/LightGrid";
import SingleLight from "./components/SingleLight";
import Text from "./components/Text";

function App() {
  const [countRows, setCountRows] = useState(0)
  const [countColumns, setCountColumns] = useState(0)
  const [bulbs, setBulbs] = useState(0);
  useEffect(() => {
    setBulbs(countRows * countColumns)
  }, [countRows, countColumns])
  
  return (
    <div>
      <nav className="nav">
        <Text text="bulbs" bulbs={bulbs} />
        <Counter text="rows" count={countRows} setCount={setCountRows} />
        <Counter text="columns" count={countColumns} setCount={setCountColumns} />
      </nav>
      <LightGrid countRows={countRows} countColumns={countColumns} setBulbs={setBulbs} bulbs={bulbs}>
        <SingleLight />
      </LightGrid>
    </div>
  );
}

export default App;
