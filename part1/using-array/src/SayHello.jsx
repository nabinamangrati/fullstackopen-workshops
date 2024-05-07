let SayHello = (person) => {
  console.log(person);
  //   return React.createElement("h1", { id: "myId" }, `Hello ${props.firstName}`);
  return (
    // <h1 id="myID">
    //   Hello {props.firstName} {props.lastName} {props.id}
    // </h1>
    <h1 id="myID">Hello {person.firstName}</h1>
  );
};

export default SayHello;
