import "./App.css";
import Counter from "./components/Counter";
import SingleLight from "./components/SingleLight";
import Text from "./components/Text";

function App() {
  return (
    <div>
      <nav className="nav">
        <Text text="bulbs" count="0" />
        <Counter text="rows" />
        <Counter text="columns" />
      </nav>
      <section>
        <SingleLight />
      </section>
    </div>
  );
}

export default App;
