const noteReducer = (state = [], action) => {
  console.log(action, "action");
  console.log(state, "state");
  if (action.type === "NEW_NOTE") {
    const newState = state.concat(action.payload);
    return newState;
  }

  return state;
};
export default noteReducer;
