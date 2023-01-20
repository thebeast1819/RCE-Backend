require("dotenv").config();
const express = require("express");
const router = express.Router();
const app = express();
const cors = require("cors");
const {code} = require("../controller/editor");

//Middlewares
app.use(express.json());
app.use(cors());

router.post("/code", code);

module.exports = router;