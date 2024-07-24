import { useState } from "react";
import { createRoot } from "react-dom/client";
import { createStore } from "redux";
// import App from "./App";

const counterReducer = (state = 0, action) => {
  console.log(action, "action");
  console.log(state, "state");
  if (action.type === "ADD") {
    const newState = state + 1;
    return newState;
  } else if (action.type === "SUBTRACT") {
    const newState = state - 1;
    return newState;
  } else if (action.type === "ZERO") {
    const newState = 0;
    return newState;
  }
  return state;
};
const store = createStore(counterReducer);

const App = () => {
  const [counter, setCounter] = useState(0);
  const addCounetr = () => {
    // setCounter(counter + 1);
    store.dispatch({ type: "ADD" });
  };
  const subtractCounter = () => {
    // setCounter(counter - 1);
    store.dispatch({ type: "SUBTRACT" });
  };
  const zeroCounter = () => {
    // setCounter(0);
    store.dispatch({ type: "ZERO" });
  };
  return (
    <div>
      {/* <div>{counter}</div> */}
      <div>{store.getState()}</div>
      <button onClick={addCounetr}>add</button>
      <button onClick={subtractCounter}>subtract</button>
      <button onClick={zeroCounter}>zero</button>
    </div>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
store.subscribe(() => {
  root.render(<App />);
});
