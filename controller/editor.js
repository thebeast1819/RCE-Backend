require("dotenv").config();
const express = require("express");
const app = express();
const {generateFile} = require("../utils/generateFile");
const cors = require("cors");
const uuid = require("uuid");

//Middlewares
app.use(express.json());
app.use(cors());

exports.code = async (req, res, next) => {
  const { code, language } = req.body;
  if(code === '') res.status(400).json({message: 'Empty code'});
  const filepath = await generateFile(code, language);
  return res.status(200).json({filepath});
  next();
};
 