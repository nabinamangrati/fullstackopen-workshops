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
    <form onSubmit={handleSubmit}>
      <input
        placeholder="enter text here"
        type="text"
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
        id="note-input"
      />
      <button type="submit">save</button>
    </form>
  );
};

export default NoteForm;
