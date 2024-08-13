import { Link } from "react-router-dom";
const Notes = ({ notes }) => {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <Link to={`/notes/${note.id}`} key={note.id}>
            <li>
              {note.content}
              <strong>{note.important ? "important" : ""}</strong>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
export default Notes;
