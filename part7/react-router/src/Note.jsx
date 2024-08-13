const Note = ({ note }) => {
  return (
    <>
      <h1>this is single note for {note.id}</h1>
      <li>
        {note.content}
        <strong>{note.important ? "important" : ""}</strong>
      </li>
    </>
  );
};
export default Note;
