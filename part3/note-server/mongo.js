const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log("give password as argument");
  process.exit(1);
}

const password = process.argv[2];

const url = process.env.MONGODB_URI;

mongoose.set("strictQuery", false);

mongoose.connect(url);

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
});

const Note = mongoose.model("Note", noteSchema);

const note1 = new Note({
  content: "HTML is easy",
  important: true,
});
const note2 = new Note({
  content: "Browser can execute only Javascript",
  important: false,
});

note1.save().then((result) => {
  console.log("note saved!");
});
note2.save().then((result) => {
  console.log("note saved!");
  mongoose.connection.close();
});
