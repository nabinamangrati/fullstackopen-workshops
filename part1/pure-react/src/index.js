let Sayhello = (props) => {
  return React.createElement("h1", { id: "myID" }, `Hello ${props.firstName}`);
};
let App = () => {
  return React.createElement("div", {}, [
    React.createElement(Sayhello, { firstName: "nabina" }),
    React.createElement(Sayhello, { firstName: "liza" }),
    React.createElement(Sayhello, { firstName: "rajila" }),
  ]);
};
let container = document.getElementById("root");
let root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
