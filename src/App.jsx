import "./App.css";
import Midi from "./component/Midi";
import Square from "./component/Square";

function App() {
  return (
    <div className="App">
      <h1 style={{ color: "teal", fontWeight: "bold" }}>Helloooooo Dev!</h1>
      <Square />
      <Midi />
    </div>
  );
}

export default App;
