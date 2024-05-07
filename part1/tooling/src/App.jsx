import SayHello from "./SayHello";

let App = () => {
  //   return React.createElement("div", {}, [
  //     React.createElement(SayHello, { firstName: "Rushil" }),
  //     React.createElement(SayHello, { firstName: "Sushil" }),
  //     React.createElement(SayHello, { firstName: "Liza" }),
  //   ]);
  return (
    <div>
      <SayHello firstName="Rushil" />
      <SayHello firstName="Sushil" />
      <SayHello firstName="Liza" />
    </div>
  );
};

export default App;
