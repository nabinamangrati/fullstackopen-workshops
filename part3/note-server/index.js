const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const { url, PORT } = require("./utils/config");
const {
  errorHandler,
  noHandler,
  requestLogger,
} = require("./utils/middleware");

mongoose.set("strictQuery", false);

mongoose.connect(url);

const noteSchema = new mongoose.Schema({
  content: {
    type: String,
    minLength: 5,
    required: true,
  },

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

app.use(requestLogger);

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

  Note.findByIdAndUpdate(request.params.id, note, {
    new: true,
    runValidators: true,
  })
    .then((updatedNote) => {
      response.json(updatedNote);
    })
    .catch((error) => next(error));
});

app.delete("/api/notes/:id", (request, response, next) => {
  Note.findByIdAndDelete(request.params.id)
    .then(() => {
      response.status(204).end();
    })
    .catch((error) => next(error));
});
app.post("/api/notes", (request, response, next) => {
  const body = request.body;

  const note = new Note({
    content: body.content,
    important: body.important || false,
  });

  note
    .save()
    .then((savedNote) => {
      response.json(savedNote);
    })
    .catch((e) => {
      next(e);
    });
});

app.use(noHandler);

// this has to be the last loaded middleware, also all the routes should be registered before this!
app.use(errorHandler);

app.listen(PORT);
console.log(`Server running on port ${PORT}`);
