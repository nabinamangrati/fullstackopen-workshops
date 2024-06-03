const express = require("express");
const app = express();
const cors = require("cors");
const notesController = require("./controllers/notes");
const usersController = require("./controllers/users");
const loginController = require("./controllers/login");
const { url } = require("./utils/config");
const {
  errorHandler,
  noHandler,
  requestLogger,
} = require("./utils/middleware");
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose.connect(url);

console.log("NODE_ENV is", process.env.NODE_ENV);

app.use(express.json());
app.use(cors());
app.use(express.static("dist"));

app.use(requestLogger);
app.use("/api/notes", notesController);
app.use("/api/users", usersController);
app.use("/api/login", loginController);

app.use(noHandler);

// this has to be the last loaded middleware, also all the routes should be registered before this!
app.use(errorHandler);

module.exports = app;
