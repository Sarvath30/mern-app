const express = require("express");
const router = express.Router();
const notes = require("./notes.controller");

// note create route
router.post("/", notes.create);

// get notes route
router.get("/", notes.get);

// get note by Id route
router.get("/:id", notes.getNoteById);

// update note by Id route
router.put("/:id", notes.updateNoteById);

// delete note by Id route
router.delete("/:id", notes.deleteNoteById);

module.exports = router;
