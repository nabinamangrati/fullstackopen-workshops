import { createRoot } from "react-dom/client";
// import { createStore, combineReducers } from "redux";
import noteReducer from "./reducers/noteReducer";
import { configureStore } from "@reduxjs/toolkit";

import App from "./App";
import { Provider } from "react-redux";
import filterReducer from "./reducers/filterReducer";

// const reducer = combineReducers({
//   notes: noteReducer,
//   filter: filterReducer,
// });
// const store = createStore(reducer);
const store = configureStore({
  reducer: {
    notes: noteReducer,
    filter: filterReducer,
  },
});
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
