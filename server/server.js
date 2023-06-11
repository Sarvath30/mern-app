const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config({ path: path.resolve(__dirname + "/.env") });

const app = express();
const apiRouter = require("./routes/index");

var server = require("http").createServer(app);

app.use(bodyParser.json({ limit: "50mb" }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// prevent app crash / handle error
process
  .on("unhandledRejection", (reason, p) => {
    console.error(reason, "Unhandled Rejection at Promise", p);
  })
  .on("uncaughtException", (err) => {
    console.error(err, "Uncaught Exception thrown");
    process.exit(1);
  });

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json()); /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(
  express.urlencoded({ extended: true })
); /* bodyParser.urlencoded() is deprecated */

// DB connection
mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@mern.x2cs2oc.mongodb.net/`
);

// get reference to database
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("DB Connected");
});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});

// api call
app.use("/api", apiRouter);

// server port
server.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
