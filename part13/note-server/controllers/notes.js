const app = require("express").Router();
const { Note } = require("../models/index");

app.get("/", async (req, res) => {
  const notes = await Note.findAll();
  res.json(notes);
});

app.post("/", async (req, res) => {
  console.log(req.body);
  const note = await Note.create(req.body);
  res.json(note);
});

app.get("/:id", async (req, res) => {
  const note = await Note.findByPk(req.params.id);
  if (note) {
    console.log(JSON.stringify(note, null, 2));
    res.json(note);
  } else {
    res.status(404).send("no data found");
  }
});

app.put("/:id", async (req, res) => {
  const note = await Note.findByPk(req.params.id);
  if (note) {
    note.important = req.body.important;
    await note.save();
    res.json(note);
  } else {
    res.status(404).end();
  }
});

module.exports = app;
