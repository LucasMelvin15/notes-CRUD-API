const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  res.status(200).json({ message: "here are all the notes" });
});
router.route("/:id").get((req, res) => {
  res.status(200).json({ message: `get note for ${req.params.id}` });
});
router.route("/").post((req, res) => {
  res.status(200).json({ message: "Create a note" });
});
router.route("/:id").put((req, res) => {
  res.status(200).json({ message: `update note ${req.params.id}` });
});
router.route("/:id").delete((req, res) => {
  res.status(200).json({ message: `delete note ${req.params.id}` });
});

module.exports = router;
