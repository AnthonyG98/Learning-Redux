import logo from "./logo.svg";
import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter);
  return (
    <div className="App">
      <h1>Counter app</h1>
      <h2>{counter}</h2>
    </div>
  );
}

export default App;
