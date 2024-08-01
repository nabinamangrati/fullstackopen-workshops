import { makeNote } from "../reducers/noteReducer";
import { useSelector, useDispatch } from "react-redux";

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
    dispatch(makeNote(newNote));
    // dispatch((dispatch) => {
    //   const myNote = noteService.createNew(newNote);
    //   dispatch(createNote(myNote));
    //   const data = restApi;
    //   dispatch(data);
    // });

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
