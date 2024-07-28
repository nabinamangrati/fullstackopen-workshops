const noteReducer = (state = [], action) => {
  console.log(action, "action");
  console.log(state, "state");
  switch (action.type) {
    case "NEW_NOTE": {
      const newState = state.concat(action.payload);
      return newState;
    }
    case "TOGGLE_IMPORTANCE": {
      let myNote = state.find((note) => note.id === action.payload);
      let changedNote = { ...myNote, important: !myNote.important }; //this is same as lower line
      //   changedNote.important = !changedNote.important;
      return state.map((note) =>
        note.id === changedNote.id ? changedNote : note
      );
    }
    default:
      return state;
  }
};
const createNote = (newNote) => {
  return {
    type: "NEW_NOTE",
    payload: newNote,
  };
};

const toggleImportanceOf = (id) => {
  return {
    type: "TOGGLE_IMPORTANCE",
    payload: id,
  };
};

export { createNote, toggleImportanceOf };

export default noteReducer;
