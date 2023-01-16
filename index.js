require("dotenv").config();

const express = require("express");
const cors = require('cors');

const app = express();
const port = 8080;

var server = app.listen(port, () => {
    console.log("On port 8080!");
  });
  