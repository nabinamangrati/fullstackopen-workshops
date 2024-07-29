import NoteForm from "./components/NoteForm";
import Notes from "./components/Notes";
import VisibilityFilter from "./components/VisibilityFilter";
const App = () => {
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
