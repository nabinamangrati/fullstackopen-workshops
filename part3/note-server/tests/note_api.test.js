const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const assert = require("assert");
const Note = require("../models/note");
const helpers = require("./test_helper");

beforeEach(async () => {
  await Note.deleteMany({});
  let noteObject = new Note(helpers.initialNotes[0]);
  await noteObject.save();
  noteObject = new Note(helpers.initialNotes[1]);
  await noteObject.save();
});

const api = supertest(app);

test("notes are returned as json", async () => {
  await api
    .get("/api/notes")
    .expect(200)
    .expect("Content-Type", /application\/json/);
});
test("there are two notes", async () => {
  const response = await helpers.notesInDb();

  assert.strictEqual(response.length, helpers.initialNotes.length);
});

//we can just test the below test by using test.only
test("the first note is about HTTP methods", async () => {
  const response = await helpers.notesInDb();

  const contents = response.map((e) => e.content);
  assert.strictEqual(contents.includes(helpers.initialNotes[0].content), true);
});

test("a  note without content can't be added ", async () => {
  const newNote = {
    important: true,
  };

  await api.post("/api/notes").send(newNote).expect(400);

  const response = await api.get("/api/notes");

  assert.strictEqual(response.body.length, helpers.initialNotes.length);
});
// also can use the command npm test -- tests/note_api.test.js for only to test this file tests

afterAll(async () => {
  await mongoose.connection.close();
});
