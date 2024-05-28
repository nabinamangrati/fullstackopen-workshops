const app = require("express").Router();
const Note = require("../models/note");

app.get("/", async (request, response) => {
  let result = await Note.find({});
  response.json(result);
});

app.get("/:id", (request, response, next) => {
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

app.put("/:id", (request, response, next) => {
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

app.delete(":id", (request, response, next) => {
  Note.findByIdAndDelete(request.params.id)
    .then(() => {
      response.status(204).end();
    })
    .catch((error) => next(error));
});
app.post("/", async (request, response, next) => {
  const body = request.body;

  const note = new Note({
    content: body.content,
    important: body.important || false,
  });
  try {
    let savedNote = await note.save();
    response.status(201).json(savedNote);
  } catch (e) {
    next(e);
  }
});

module.exports = app;
