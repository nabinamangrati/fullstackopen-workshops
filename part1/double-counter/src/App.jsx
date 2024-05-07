import { useState } from "react";
import Display from "./Display";
import MyButton from "./MyButton";
import History from "./History";

const App = () => {
  let initialState = {
    left: 0,
    right: 0,
  };
  // let [left, setLeft] = useState(1);
  // let [right, setRight] = useState(1);
  let [clicks, setClicks] = useState(initialState);
  //for setting the clicks history
  let [clickHistory, setHistory] = useState([]);
  //for the total number of history
  let [totalClicks, setTotal] = useState(0);

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
    //setClicks({ left: clicks.left, right: clicks.right }); ==> yedi hamle newright variable nabanayeko vaye yesto huntho and settotal ma newright ko satta clicks.right hunthyo
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

      {/* <div>click history:{clickHistory}</div> */}
      <History history={clickHistory} />
      <div>total clicks:{totalClicks}</div>
    </div>
  );
};

export default App;
