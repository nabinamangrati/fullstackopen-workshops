const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const url = `mongodb+srv://nabina1:mypassword@cluster0.fjzyldz.mongodb.net/noteApp?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.set("strictQuery", false);

mongoose.connect(url);

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
});

noteSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Note = mongoose.model("Note", noteSchema);

app.use(express.json());
app.use(cors());
app.use(express.static("dist"));
const requestLogger = (request, response, next) => {
  console.log("Method:", request.method);
  console.log("Path:  ", request.path);
  console.log("Body:  ", request.body);
  console.log("we just wrote this code ");
  next();
};
app.use(requestLogger);
let notes = [];
app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>");
});
app.get("/api/notes", (request, response) => {
  Note.find({}).then((notes) => {
    response.json(notes);
  });
});

app.get("/api/notes/:id", (request, response, next) => {
  Note.findById(request.params.id)
    .then((result) => {
      // const myId = Number(request.params.id);
      // const myNote = notes.find((note) => note.id === myId);
      if (result) {
        response.json(result);
      } else {
        response.end(`there is no note on  ${request.params.id}`);
      }
    })
    .catch((e) => {
      next(e);
      //if added "next" we can just catch next(e)
      // console.log(e);
      // response
      //   .status(500)
      //   .send(`${request.params.id} is not in the required format`);
    });
});

app.put("/api/notes/:id", (request, response, next) => {
  const body = request.body;

  const note = {
    content: body.content,
    important: body.important,
  };

  Note.findByIdAndUpdate(request.params.id, note, { new: true })
    .then((updatedNote) => {
      response.json(updatedNote);
    })
    .catch((error) => next(error));
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

const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" });
  }

  next(error);
};

// this has to be the last loaded middleware, also all the routes should be registered before this!
app.use(errorHandler);
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
