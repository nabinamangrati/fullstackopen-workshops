import { createRoot } from "react-dom/client";
import { createStore } from "redux";
import noteReducer from "./reducers/noteReducer";
// import App from "./App";

const noteReducer = (state = [], action) => {
  console.log(action, "action");
  console.log(state, "state");
  if (action.type === "NEW_NOTE") {
    const newState = state.concat(action.payload);
    return newState;
  }

  return state;
};
const store = createStore(noteReducer);
store.dispatch({
  type: "NEW_NOTE",
  payload: {
    content: "the app state is in redux store",
    important: true,
    id: 1,
  },
});
store.dispatch({
  type: "NEW_NOTE",
  payload: {
    content: "state changes are made with actions",
    important: false,
    id: 2,
  },
});

const App = () => {
  return (
    <div>
      <ul>
        {store.getState().map((note) => (
          <li key={note.id}>
            {note.content} <strong>{note.important ? "important" : ""}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
// store.subscribe(() => {
//   root.render(<App />);
// });
