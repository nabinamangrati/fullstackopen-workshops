import { createSlice } from "@reduxjs/toolkit";
import noteService from "../services/notes";
const noteReducer = createSlice({
  name: "notes",
  initialState: [],
  reducers: {
    createNote(state, action) {
      const newState = state.concat(action.payload);
      return newState;
    },
    toggleImportanceOf(state, action) {
      let myNote = state.find((note) => note.id === action.payload);
      let changedNote = { ...myNote, important: !myNote.important }; //this is same as lower line
      //   changedNote.important = !changedNote.important;
      return state.map((note) =>
        note.id === changedNote.id ? changedNote : note
      );
    },
  },
});
const { createNote, toggleImportanceOf } = noteReducer.actions;
const makeNote = (newNote) => {
  return async (dispatch) => {
    const myNote = await noteService.createNew(newNote);
    dispatch(createNote(myNote));
  };
};

export { createNote, toggleImportanceOf, makeNote };
export default noteReducer.reducer;
