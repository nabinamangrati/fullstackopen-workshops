import { useState } from "react";
import Display from "./Display";
import MyButton from "./MyButton";
const App = () => {
  // const App = (props) => {
  // return <div>{props.counter}</div>;
  let [counter, setCounter] = useState(1);
  // setTimeout(() => setCounter(counter + 1), 1000);
  const increaseByOne = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <Display counter={counter} />
      <MyButton someFunc={increaseByOne} />
      {/* <button onClick={increaseByOne}>plus 1</button> */}
    </div>
  );
};

export default App;
