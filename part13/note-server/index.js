const express = require("express");
const app = express();
const notesRouter = require("./controllers/notes");
const { PORT } = require("./util/config");

app.use(express.json());
app.use("/api/notes", notesRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
