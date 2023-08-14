const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;

app.use(express.json());
app.use("/api/notes", require("./routes/notesRoutes"));

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
