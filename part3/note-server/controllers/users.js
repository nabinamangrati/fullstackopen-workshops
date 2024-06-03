const app = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

app.get("/", async (request, response) => {
  let result = await User.find({}).populate("note", {
    content: 1,
    important: 1,
  });

  console.log(result, "result");
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
    name: body.name,
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
