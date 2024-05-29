const app = require("express").Router();
const User = require("../models/user");

app.get("/", async (request, response) => {
  let result = await User.find({});
  response.json(result);
});

app.get("/:id", (request, response, next) => {
  User.findById(request.params.id)
    .then((result) => {
      // const myId = Number(request.params.id);
      // const myNote = notes.find((note) => note.id === myId);
      if (result) {
        response.json(result);
      } else {
        response.end(`there is no user on  ${request.params.id}`);
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

app.post("/", async (request, response, next) => {
  const body = request.body;

  const User = new User({
    content: body.content,
    important: body.important || false,
  });
  try {
    let savedUser = await user.save();
    response.status(201).json(savedUser);
  } catch (e) {
    next(e);
  }
});

module.exports = app;
