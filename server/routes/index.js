const express = require("express");
const app = express();

// notes
app.use("/notes", require("../controllers/notes"));

module.exports = app;
