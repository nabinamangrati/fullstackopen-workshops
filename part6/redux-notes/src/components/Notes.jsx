import { useSelector, useDispatch } from "react-redux";
import { toggleImportanceOf } from "../reducers/noteReducer";

const Notes = ({ filter }) => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => {
    if (filter === "ALL") {
      return state;
    }
    if (filter === "IMPORTANT") {
      return state.filter((note) => {
        if (note.important === true) {
          return true;
        }
      });
    }
    if (filter === "NONIMPORTANT") {
      return state.filter((note) => {
        if (note.important === false) {
          return true;
        }
      });
    }
  });
  //we can use below as ternary for the above
  // const notes = useSelector((state) =>
  //   filter === "ALL"
  //     ? state
  //     : filter === "IMPORTANT"
  //     ? state.filter((note) => note.important === true)
  //     : filter === "NONIMPORTANT"
  //     ? state.filter((note) => note.important === false)
  //     : state
  // );

  const toggleImportant = (id) => {
    dispatch(toggleImportanceOf(id));
  };
  return (
    <ul>
      {notes.map((note) => (
        <li
          key={note.id}
          onClick={() => {
            toggleImportant(note.id);
          }}
        >
          {note.content} <strong>{note.important ? "important" : ""}</strong>
        </li>
      ))}
    </ul>
  );
};
export default Notes;
