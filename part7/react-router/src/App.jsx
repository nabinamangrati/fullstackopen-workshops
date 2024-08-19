import { Routes, Route, Link, Navigate, useMatch } from "react-router-dom";
import Notes from "./Notes";
import Note from "./Note";
import { useState } from "react";
import Login from "./Login";
// import { Nav, Navbar } from "react-bootstrap";
import { Page, Navigation, Footer } from "./components/Button";
// import {
//   Container,
//   Alert,
//   AppBar,
//   Toolbar,
//   IconButton,
//   Button,
// } from "@mui/material";

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
  const match = useMatch("/notes/:id");
  const note = match ? notes.find((note) => note.id === match.params.id) : null;

  const footerStyle = { color: "blue", fontSize: "30px" };
  return (
    <>
      <Page>
        <Navigation>
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
        </Navigation>

        <Routes>
          <Route path="/notes/:id" element={<Note note={note} />} />
          <Route path="/notes" element={<Notes notes={notes} />} />
          <Route
            path="/users"
            element={user ? <Users /> : <Navigate replace to="/login" />}
          />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/" element={<Home />} />
        </Routes>

        <Footer>
          <em>Note app, Department of Computer Science 2022</em>
        </Footer>
      </Page>
    </>
  );
};

export default App;
