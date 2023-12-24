import { useDispatch, useSelector } from "react-redux";
function App() {
  const counter = useSelector((state) => state.count);
  const dispatch = useDispatch();
  console.log(counter);
  return (
    <div className="App">
      <header className="App-header">
        <h1>counter:{counter}</h1>
        <button
          onClick={() => {
            dispatch({ type: "INC" });
          }}
        >
          Increment
        </button>
        <button onClick={() => dispatch({ type: "ADD", payload: 10 })}>
          Add by 10
        </button>
        <button onClick={() => dispatch({ type: "DEC" })}>Decrement</button>
      </header>
    </div>
  );
}

export default App;
