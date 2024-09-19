const app = require("express").Router();
const { Note, User } = require("../models/index");
const { Op } = require("sequelize");
const { tokenExtractor } = require("../util/middleware");

const noteFinder = async (req, res, next) => {
  req.note = await Note.findByPk(req.params.id);
  next();
};

app.get("/", async (req, res) => {
  const where = {};

  let important = {
    [Op.in]: [true, false],
  };
  if (req.query.important) {
    important = req.query.important === "true";
  }

  if (req.query.search) {
    where.content = {
      [Op.substring]: req.query.search,
    };
  }
  const notes = await Note.findAll({
    attributes: { exclude: ["userId"] },
    include: {
      model: User,
      attributes: ["name"],
    },
    where,
  });
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
