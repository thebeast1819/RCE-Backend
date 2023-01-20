require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

//Middlewares
app.use(express.json());
app.use(cors());

exports.code = (req, res, next) => {
    const {code, language} = req.body;
    
    next();
}