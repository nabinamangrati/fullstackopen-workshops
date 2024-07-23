// NoteForm.jsx
import React, { useState } from "react";

const NoteForm = ({ onSubmit }) => {
  const [newNote, setNewNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      content: newNote,
      important: true,
    });
    setNewNote("");
  };

  return (
    <div>
      <h1>Create new note</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="enter text here"
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          id="inputNote"
        />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default NoteForm;
