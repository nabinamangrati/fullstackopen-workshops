import { useState } from "react";
import Note from "./components/Notes";
const App = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("");

  const notesToShow = notes.filter((note) => {
    return !note.important;
  });
  const handleSubmit = () => {
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
  return (
    <>
      <h1>Notes</h1>
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
