import "./App.css";
// import { useState } from "react";
import Example from "./Example";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./Apps/counterSlices";
function App() {
  // const [counter, setCounter] = useState(0);
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const incrementCounter = () => {
    // setCounter((preCounter) => preCounter + 1);
    dispatch(increment());
  };

  const decrementCounter = () => {
    // setCounter((preCounter) => preCounter - 1);
    dispatch(decrement());
  };

  return (
    <div className="App">
      <Example />
      <h1>value={counter}</h1>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(100))}>
        IncrementBy100
      </button>
    </div>
  );
}

export default App;
