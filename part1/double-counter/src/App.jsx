import { useState } from "react";
import Display from "./Display";
import MyButton from "./MyButton";

const App = () => {
  let initialState = {
    left: 1,
    right: 2,
  };
  // let [left, setLeft] = useState(1);
  // let [right, setRight] = useState(1);
  let [clicks, setClicks] = useState(initialState);
  //for setting the clicks history
  let [clickHistory, setHistory] = useState(["L", "R", "R"]);
  //for the total number of history
  let [totalClicks, setTotal] = useState(3);

  const increaseByOneLeft = () => {
    // setLeft(left + 1);
    let newLeft = clicks.left + 1;
    let newState = {
      left: newLeft,
      right: clicks.right,
    };
    setClicks(newState);
    //push method use garda hudaina so concat use garne to add the history
    setHistory(clickHistory.concat("L"));
    //settotal function so so aba hamlai left rw right both ko ckick history chainxa so both lai + , same in the increasebyoneright

    setTotal(newLeft + clicks.right);
  };
  const increaseByOneRight = () => {
    let newRight = clicks.right + 1;
    // setRight(right + 1);
    setClicks({ left: clicks.left, right: newRight });
    //tei state lai mutate nagarney , existing state bata naya state banayera naya value pathaune
    setHistory([...clickHistory, "R"]);
    setTotal(newRight + clicks.left);
  };

  return (
    <div>
      {/* {left} */}
      {clicks.left}
      <button onClick={increaseByOneLeft}>left</button>
      {/* {right} */}
      {clicks.right}
      <button onClick={increaseByOneRight}>right</button>
      <div>click history:{clickHistory}</div>
      <div>total clicks:{totalClicks}</div>
    </div>
  );
};

export default App;
