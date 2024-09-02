const express = require("express");
const app = express();
const notesRouter = require("./controllers/notes");

app.use(express.json());
app.use("/api/notes", notesRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
