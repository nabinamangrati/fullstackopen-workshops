// import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterChange } from "./reducers/filterReducer";
import NoteForm from "./components/NoteForm";
import Notes from "./components/Notes";

const App = () => {
  // const [filter, setFilter] = useState("ALL");
  const dispatch = useDispatch();
  const filter = useSelector((state) => {
    return state.filter;
  });
  const filterSelected = (filter) => {
    console.log("clicked radio button", filter);
    // setFilter(filter);
    dispatch(filterChange(filter));
  };
  return (
    <div>
      <div>
        all
        <input
          type="radio"
          name="filter"
          onChange={() => filterSelected("ALL")}
          checked={filter === "ALL"}
        />
        important
        <input
          type="radio"
          name="filter"
          onChange={() => filterSelected("IMPORTANT")}
        />
        nonimportant
        <input
          type="radio"
          name="filter"
          onChange={() => filterSelected("NONIMPORTANT")}
        />
      </div>
      <h1>Notes</h1>
      <NoteForm />
      <Notes />
    </div>
  );
};

export default App;
