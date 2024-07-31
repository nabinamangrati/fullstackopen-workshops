import { useEffect } from "react";
import services from "./services/notes";
import NoteForm from "./components/NoteForm";
import Notes from "./components/Notes";
import VisibilityFilter from "./components/VisibilityFilter";
import { useDispatch } from "react-redux";
import { createNote } from "./reducers/noteReducer";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    services.getAll().then((response) => {
      dispatch(createNote(response));
    });
  }, []);
  return (
    <div>
      <VisibilityFilter />
      <h1>Notes</h1>
      <NoteForm />
      <Notes />
    </div>
  );
};

export default App;
