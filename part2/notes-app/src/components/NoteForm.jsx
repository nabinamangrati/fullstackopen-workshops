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
  const handleChange = (e) => {
    setNewNote(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={newNote} onChange={handleChange} />
      <button type="submit">save</button>
    </form>
  );
};

export default NoteForm;
