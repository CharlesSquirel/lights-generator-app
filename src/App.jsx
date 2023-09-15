import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import LightGrid from "./components/LightGrid";
import SingleLight from "./components/SingleLight";
import Text from "./components/Text";

function App() {
  const [countRows, setCountRows] = useState(0)
  const [countColumns, setCountColumns] = useState(0)
  return (
    <div>
      <nav className="nav">
        <Text text="bulbs" count="0" />
        <Counter text="rows" count={countRows} setCount={setCountRows} />
        <Counter text="columns" count={countColumns} setCount={setCountColumns} />
      </nav>
      <LightGrid countRows={countRows} countColumns={countColumns}>
        <SingleLight />
      </LightGrid>
    </div>
  );
}

export default App;
