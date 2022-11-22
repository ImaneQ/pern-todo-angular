// to quicly create a server => nodeJS

// to run express library
const express = require("express");
const app = express();

module.exports = app;

const app = require("./app");
const cors = require('cors');
const pool = require("./db");


// middleware
app.use(cors());
app.use(express.json());


app.listen(3000, () => {
  console.log("listening on port 3000");
});
