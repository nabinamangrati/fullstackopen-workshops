import { createNote } from "../reducers/noteReducer";
import { useSelector, useDispatch } from "react-redux";
import noteService from "../services/notes";

const NoteForm = () => {
  const dispatch = useDispatch();

  const notes = useSelector((state) => state.notes);
  const addNote = (event) => {
    event.preventDefault();
    console.dir(event.target.myInput.value);
    const newNote = {
      content: event.target.myInput.value,
      important: true,
      id: notes.length + 1,
    };
    noteService.createNew(newNote).then((myNote) => {
      dispatch(createNote(myNote));
    });
    event.target.myInput.value = "";
  };
  return (
    <form onSubmit={addNote}>
      <input name="myInput" />
      <button>Add Note</button>
    </form>
  );
};
export default NoteForm;
