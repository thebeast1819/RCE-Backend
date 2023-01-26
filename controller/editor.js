require("dotenv").config();
const express = require("express");
const app = express();
const { generateFile } = require("../utils/generateFile");
const { execCpp } = require("../utils/executeCpp");
const cors = require("cors");
const uuid = require("uuid");

//Middlewares
app.use(express.json());
app.use(cors());

exports.code = async (req, res, next) => {
  const { code, language } = req.body;
  if (code === "") res.status(400).json({ message: "Empty code" });
  try {
    const filepath = await generateFile(code, language);
    const output = await execCpp(filepath);
    return res.json({ filepath, output });
  } catch (err) {
    res.status(500).json(err);
  }
  next();
};
