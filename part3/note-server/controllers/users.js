const app = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

app.get("/", async (request, response) => {
  let result = await User.find({});
  response.json(result);
});

app.get("/:id", (request, response, next) => {
  User.findById(request.params.id)
    .then((result) => {
      if (result) {
        response.json(result);
      } else {
        response.end(`there is no user on  ${request.params.id}`);
      }
    })
    .catch((e) => {
      next(e);
    });
});

app.post("/", async (request, response, next) => {
  const body = request.body;

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(body.password, saltRounds);

  const user = new User({
    username: body.username,
    user: body.user,
    passwordHash,
  });
  try {
    let savedUser = await user.save();
    response.status(201).json(savedUser);
  } catch (e) {
    next(e);
  }
});

module.exports = app;
