const express = require("express");
const app = express();
app.use(express.json());
const requestLogger = (request, response, next) => {
  console.log("Method:", request.method);
  console.log("Path:  ", request.path);
  console.log("Body:  ", request.body);
  console.log("we just wrote this code ");
  next();
};
app.use(requestLogger);
let notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
];
app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>");
});
app.get("/api/notes", (request, response) => {
  response.json(notes);
});

app.get("/api/notes/:id", (request, response) => {
  const myId = Number(request.params.id);
  const myNotes = notes.find((note) => note.id === myId);
  if (myNotes) {
    response.json(myNotes);
  } else {
    response.end(`there is no note on  ${myId}`);
  }
});
app.delete("/api/notes/:id", (request, response) => {
  const myId = Number(request.params.id);
  notes = notes.filter((note) => note.id !== myId);
  response.status(204).end(`the note on ${myId} has been deleted`);
});
app.post("/api/notes/", (request, response) => {
  const myNewPost = request.body;

  myNewPost.id = notes.length + 1;
  notes.push(myNewPost);
  console.log(myNewPost);
  response.status(201).json(myNewPost);
});
app.use((request, response, next) => {
  response.status(404).send("no code available to handle this request");
});
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
