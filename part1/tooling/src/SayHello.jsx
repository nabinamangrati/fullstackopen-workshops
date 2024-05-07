let SayHello = (props) => {
  console.log(props);
  //   return React.createElement("h1", { id: "myId" }, `Hello ${props.firstName}`);
  return <h1 id="myID">Hello {props.firstName}</h1>;
};

export default SayHello;
