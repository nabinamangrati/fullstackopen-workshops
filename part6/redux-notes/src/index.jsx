import { createRoot } from "react-dom/client";
// import noteReducer from "./reducers/noteReducer";
// import { configureStore } from "@reduxjs/toolkit";
import store from "./store";
import App from "./App";
import { Provider } from "react-redux";
// import filterReducer from "./reducers/filterReducer";

// const store = configureStore({
//   reducer: {
//     notes: noteReducer,
//     filter: filterReducer,
//   },
// });
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
