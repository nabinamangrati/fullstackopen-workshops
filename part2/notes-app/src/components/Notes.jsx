const Note = ({ note, updatedNote }) => {
  return (
    <li className="note">
      {note.content}{" "}
      <button onClick={updatedNote}>
        change {note.important ? "true" : "false"}
      </button>
    </li>
  );
};
export default Note;
