import { useDispatch, useSelector } from "react-redux";
import { actions } from "./store/store";
import { useState } from "react";
function App() {
  const counter = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const [number, setNumber] = useState(0);
  console.log(counter);
  return (
    <div className="App">
      <header className="App-header">
        <h1>counter:{counter}</h1>
        <button
          onClick={() => {
            dispatch(actions.increment());
          }}
        >
          Increment
        </button>
        <input
          type="number"
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
        <button onClick={() => dispatch(actions.addBy(Number(number)))}>
          Add by {number}
        </button>
        <button onClick={() => dispatch(actions.decrement())}>Decrement</button>
      </header>
    </div>
  );
}

export default App;
