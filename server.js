const express = require("express");
const app = express();
connectDB = require("./config/dbConnection");
require("dotenv").config();
const PORT = process.env.PORT;
connectDB();
app.use(express.json());
app.use("/api/notes", require("./routes/notesRoutes"));

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
