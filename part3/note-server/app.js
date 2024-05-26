const express = require("express");
const app = express();
const cors = require("cors");
const notesController = require("./controllers/notes");
const { url } = require("./utils/config");
const {
  errorHandler,
  noHandler,
  requestLogger,
} = require("./utils/middleware");
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose.connect(url);

app.use(express.json());
app.use(cors());
app.use(express.static("dist"));

app.use(requestLogger);
app.use("/api/notes", notesController);

app.use(noHandler);

// this has to be the last loaded middleware, also all the routes should be registered before this!
app.use(errorHandler);

module.exports = app;
