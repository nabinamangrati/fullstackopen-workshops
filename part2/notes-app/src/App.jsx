import { useState, useEffect } from "react";
import Note from "./components/Notes";
import axios from "axios";
const App = (props) => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    console.log("hello");
    //1. get data from backend server
    let myAxiosPromise = axios.get("http://localhost:3001/notes");
    myAxiosPromise.then((myResult) => {
      console.log("returned promise");
      console.dir(myResult.data);
      //2. put the date into the notes state
      setNotes(myResult.data);
    });
    console.log(myAxiosPromise);
  }, []);

  const notesToShow = notes.filter((note) => {
    if (showAll) {
      return true;
    } else {
      if (note.important === true) {
        return true;
      } else {
        return false;
      }
    }
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    setNotes(
      notes.concat({
        content: newNote,
        id: notes.length + 1,
        important: Math.random() < 0.5,
      })
    );
    setNewNote("");
    console.log("form has been submitted");
  };
  const handleChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };
  const handleShowAll = () => {
    setShowAll(!showAll);
  };
  return (
    <>
      <h1>Notes</h1>
      <button onClick={handleShowAll}>
        show {showAll ? "important" : "all"}
      </button>
      <ul>
        {notesToShow.map((value) => {
          {
            /* {notes.map((value) => { */
          }
          return <Note key={value.id} note={value} />;
        })}
        {/* yesto garda index.js ma thape paxi hample app.jsx ma pani thapnu 
        parxa so to avoid this we use map method which returns a new array */}
        {/* <li>{props.notes[0].content}</li>
        <li>{props.notes[1].content}</li>
        <li>{props.notes[2].content}</li> */}
      </ul>
      <form onSubmit={handleSubmit}>
        <input value={newNote} onChange={handleChange} />
        <button>submit</button>
      </form>
    </>
  );
};

export default App;
