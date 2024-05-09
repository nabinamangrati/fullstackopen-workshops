const App = (props) => {
  return (
    <>
      <h1>Notes</h1>
      <ul>
        {props.notes.map((value) => {
          return <li>{value.content}</li>;
        })}
        {/* yesto garda index.js ma thape paxi hample app.jsx ma pani thapnu 
        parxa so to avoid this we use map method which returns a new array */}
        {/* <li>{props.notes[0].content}</li>
        <li>{props.notes[1].content}</li>
        <li>{props.notes[2].content}</li> */}
      </ul>
    </>
  );
};

export default App;
