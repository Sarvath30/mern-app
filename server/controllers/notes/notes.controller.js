const NotesModel = require("./notes");

// @route   POST /api/notes/
// @desc    Create a note
// @access  Public
exports.create = async (req, res) => {
  try {
    let newNote = await NotesModel.create(req.body);
    res.send({
      message: "Note added",
      data: newNote,
      status: 200,
    });
  } catch (err) {
    res.status(400).send({ error: err });
  }
};

// @route   GET /api/notes/
// @desc    Get all notes
// @access  Public
exports.get = async (req, res) => {
  try {
    const notes = await NotesModel.find({});
    res.send({ message: "Fetched successfully", data: notes, status: 200 });
  } catch (err) {
    res.status(400).send({ error: err });
  }
};

// @route   GET /api/notes/:id
// @desc    Get a specific note
// @access  Public
exports.getNoteById = async (req, res) => {
  try {
    const notes = await NotesModel.findById(req.params.id);
    res.send({ notes });
  } catch (err) {
    res.status(404).send({ message: "Note not found!" });
  }
};

// @route   PUT /api/notes/:id
// @desc    Update a note
// @access  Public
exports.updateNoteById = async (req, res) => {
  try {
    const updatedNote = await NotesModel.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.send({ message: "Note updated" });
  } catch (err) {
    res.status(400).send({ error: err });
  }
};

// @route   DELETE /api/notes/:id
// @desc    Delete a note
// @access  Public
exports.deleteNoteById = async (req, res) => {
  try {
    const removeNote = await NotesModel.findByIdAndRemove(req.params.id);
    res.send({ message: "Note removed" });
  } catch (err) {
    res.status(400).send({ error: err });
  }
};
