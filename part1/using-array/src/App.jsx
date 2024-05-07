import SayHello from "./SayHello";
let peopleArray = [
  { firstName: "nabina", lastName: "mangrati", id: 201 },
  { firstName: "liza", lastName: "sakya", id: 301 },
  { firstName: "rajila", lastName: "sthapit", id: 401 },
];
let App = () => {
  //   return React.createElement("div", {}, [
  //     React.createElement(SayHello, { firstName: "Rushil" }),
  //     React.createElement(SayHello, { firstName: "Sushil" }),
  //     React.createElement(SayHello, { firstName: "Liza" }),
  //   ]);
  return (
    <div>
      {/* {peopleArray.map((value) => (
        <SayHello
          firstName={value.firstName}
          lastName={value.lastName}
          id={value.id}
        />
      ))} */}
      {peopleArray.map((value) => (
        <SayHello person={value} key={value.id} />
      ))}

      {/* <SayHello
        firstName={peopleArray[0].firstName}
        lastName={peopleArray[0].lastName}
        id={peopleArray[0].id}
      />
      <SayHello firstName={peopleArray[1].firstName} />
      <SayHello firstName={peopleArray[2].firstName} /> */}
    </div>
  );
};

export default App;
