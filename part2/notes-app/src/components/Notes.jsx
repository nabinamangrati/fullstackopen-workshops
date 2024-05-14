const Note = ({ note, updateData }) => {
  return (
    <li>
      {note.content}{" "}
      <button onClick={updateData}>
        change {note.important ? "true" : "false"}
      </button>
    </li>
  );
};
export default Note;
