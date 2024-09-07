const app = require("express").Router();
const { Note } = require("../models/index");
const jwt = require("jsonwebtoken");

const { SECRET } = require("../util/config");

const noteFinder = async (req, res, next) => {
  req.note = await Note.findByPk(req.params.id);
  next();
};

const tokenExtractor = (req, res, next) => {
  const authorization = req.get("authorization");
  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    try {
      req.decodedToken = jwt.verify(authorization.substring(7), SECRET);
    } catch {
      return res.status(401).json({ error: "token invalid" });
    }
  } else {
    return res.status(401).json({ error: "token missing" });
  }
  next();
};

app.get("/", async (req, res) => {
  const notes = await Note.findAll();
  res.json(notes);
});

app.post("/", tokenExtractor, async (req, res) => {
  console.log(req.body);
  req.body.userId = req.decodedToken.id;
  const note = await Note.create(req.body);
  res.json(note);
});

app.get("/:id", noteFinder, async (req, res) => {
  // const note = await Note.findByPk(req.params.id);
  if (req.note) {
    console.log(JSON.stringify(req.note, null, 2));
    res.json(req.note);
  } else {
    res.status(404).send("no data found");
  }
});

app.put("/:id", noteFinder, async (req, res) => {
  // const note = await Note.findByPk(req.params.id);
  if (req.note) {
    req.note.important = req.body.important;
    await req.note.save();
    res.json(req.note);
  } else {
    res.status(404).end();
  }
});

module.exports = app;
