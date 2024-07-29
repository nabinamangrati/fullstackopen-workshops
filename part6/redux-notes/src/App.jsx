import { useState } from "react";
import NoteForm from "./components/NoteForm";
import Notes from "./components/Notes";
const App = () => {
  const [filter, setFilter] = useState("ALL");
  const filterSelected = (filter) => {
    console.log("clicked radio button", filter);
    setFilter(filter);
  };
  return (
    <div>
      <div>
        all
        <input
          type="radio"
          name="filter"
          onChange={() => filterSelected("ALL")}
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
      <Notes filter={filter} />
    </div>
  );
};

export default App;
