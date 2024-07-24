import { useState } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App";

const App = () => {
  const [counter, setCounter] = useState(0);
  const addCounetr = () => {
    setCounter(counter + 1);
  };
  const subtractCounter = () => {
    setCounter(counter - 1);
  };
  const zeroCounter = () => {
    setCounter(0);
  };
  return (
    <div>
      <div>{counter}</div>
      <button onClick={addCounetr}>add</button>
      <button onClick={subtractCounter}>subtract</button>
      <button onClick={zeroCounter}>zero</button>
    </div>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
