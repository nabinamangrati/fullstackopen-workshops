import { useState, useEffect } from "react";
import Note from "./components/Notes";
import axios from "axios";
import noteServices from "./services/notes";
import Notification from "./components/Notification";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [notification, setNotification] = useState("");

  useEffect(() => {
    console.log("hello");
    //1. get data from backend server
    let myAxiosPromise = noteServices.getAll();
    myAxiosPromise.then((myResult) => {
      //console.log("returned promise");
      console.dir(myResult.data);
      console.log(myResult, "from useEffect");
      myResult.push({
        id: 1000,
        content: "this is fake note",
        important: true,
      });
      //2. put the date into the notes state
      setNotes(myResult);
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
  console.log(notesToShow, "notestoshow");
  const handleSubmit = (event) => {
    event.preventDefault();
    let myNote = {
      content: newNote,
      id: `${notes.length + 1}`,
      important: Math.random() < 0.5,
    };
    let postPromise = noteServices.create(myNote);
    postPromise
      .then((result) => {
        console.log("note created data returned", result.data);
        setNotes(notes.concat(result.data));
        setNewNote("");
      })
      .catch((error) => {
        alert(error.response.data.error); // Show the specific error message from the server
      });

    console.log("form has been submitted");
  };
  const handleChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };
  const handleShowAll = () => {
    setShowAll(!showAll);
  };
  const updateData = (id) => {
    //1. update the server
    let currentNotes = notes.find((note) => {
      return note.id === id;
    });
    let updatedNote = { ...currentNotes, important: !currentNotes.important };
    let putPromise = noteServices.update(id, updatedNote);
    putPromise
      .then((result) => {
        console.dir(result);
        //2. update the reacts state
        let updatedNote = result.data;
        setNotes(
          notes.map((note) => (note.id === updatedNote.id ? updatedNote : note))
        );
      })
      .catch((err) => {
        console.log("error happened");
        console.dir(err);
        if (err.response.status === 404) {
          console.log("this means the id doesnt exist in the server");
          // alert(`sorry this note ${currentNotes.content} doesnot exist`);
          setNotification(
            `sorry this note ${currentNotes.content} doesnot exist`
          );
          setTimeout(() => {
            setNotification("");
          }, 3000);
          setNotes(notes.filter((note) => note.id !== currentNotes.id));
        } else {
          console.log("this is some other error");
        }
      });
  };

  const myStyle = { fontSize: "60px" };
  return (
    <>
      <h1 style={myStyle} className="redbackground">
        Notes
      </h1>
      <Notification message={notification} />
      <button onClick={handleShowAll}>
        show {showAll ? "important" : "all"}
      </button>
      <ul>
        {notesToShow.map((value) => {
          {
            /* {notes.map((value) => { */
          }
          return (
            <Note
              key={value.id}
              note={value}
              updatedNote={() => {
                updateData(value.id);
              }}
            />
          );
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
