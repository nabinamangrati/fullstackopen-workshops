import { useQuery, useMutation } from "@tanstack/react-query";
import { getNotes, createNote, updateNote } from "./request";
const ReactApp = () => {
  const result = useQuery({
    queryKey: ["notes"],
    queryFn: getNotes,
  });
  const newNoteMutation = useMutation({
    mutationFn: createNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
  });

  const updateNoteMutation = useMutation({
    mutationFn: updateNote,
    onSuccess: () => {
      queryClient.invalidateQueries("notes");
    },
  });
  const addNote = async (event) => {
    event.preventDefault();
    const content = event.target.note.value;
    event.target.note.value = "";
    newNoteMutation.mutate({ content, important: true });

    console.log(content);
  };

  const toggleImportance = (note) => {
    console.log("toggle importance of", note.id);
    updateNoteMutation.mutate(note.id);
  };

  // console.log(JSON.parse(JSON.stringify(result)));

  if (result.isLoading) {
    return <div>loading data...</div>;
  }

  const notes = result.data;

  return (
    <div>
      <h2>Notes app</h2>
      <form onSubmit={addNote}>
        <input name="note" />
        <button type="submit">add</button>
      </form>
      {notes.map((note) => (
        <li key={note.id} onClick={() => toggleImportance(note)}>
          {note.content}
          <strong> {note.important ? "important" : ""}</strong>
        </li>
      ))}
    </div>
  );
};

export default ReactApp;
