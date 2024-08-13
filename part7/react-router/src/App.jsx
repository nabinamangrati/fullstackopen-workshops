import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Notes from "./Notes";
import Note from "./Note";
import { useState } from "react";
import Login from "./Login";
const notes = [
  {
    content: "state changes are made with actions",
    important: true,
    id: "2",
  },
  {
    id: "b954",
    content: "new note",
    important: true,
  },
  {
    id: "5",
    content: "hello worls",
    important: true,
  },
  {
    id: "073d",
    content: "one more",
    important: false,
  },
];

const Home = () => (
  <div>
    <h2>TKTL notes app</h2>
  </div>
);

const Users = () => (
  <div>
    <h2>Users</h2>
  </div>
);

const App = () => {
  const [user, setUser] = useState(null);
  const padding = {
    padding: 5,
  };

  return (
    <BrowserRouter>
      <div>
        <Link style={padding} to="/">
          home
        </Link>
        <Link style={padding} to="/notes">
          notes
        </Link>
        <Link style={padding} to="/users">
          users
        </Link>
        {user ? (
          <em>{user} logged in</em>
        ) : (
          <Link style={padding} to="/login">
            login
          </Link>
        )}
      </div>

      <Routes>
        <Route path="/notes/:id" element={<Note notes={notes} />} />

        <Route path="/notes" element={<Notes notes={notes} />} />
        <Route path="/users" element={<Users />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/" element={<Home />} />
      </Routes>

      <div>
        <i>Note app, Department of Computer Science 2024</i>
      </div>
    </BrowserRouter>
  );
};

export default App;
