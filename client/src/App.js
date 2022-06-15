import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "./store/index";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(actions.increment());
  };
  const decrement = () => {
    dispatch(actions.decrement());
  };
  const addBy = () => {
    dispatch(actions.addBy(10));
  };
  return (
    <div className="App">
      <h1>Counter app</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>ADD</button>
      <button onClick={decrement}>SUBTRACT</button>
      <button onClick={addBy}>ADD BY</button>
    </div>
  );
}

export default App;
