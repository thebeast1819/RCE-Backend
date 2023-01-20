require("dotenv").config();
const editorRoutes = require("./routes/editor");
const express = require("express");
const cors = require('cors');

const app = express();
const port =  process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

//Routes
app.get('/', (req, res) => {
  try{
    res.status(200).send({message : "You are on port 8080!"})
  }catch(err){
    res.send(err);
  }
  
})
app.use("/editor", editorRoutes);

//Starting the server
app.listen(port, () => {
    console.log("Running on port 8080!");
  });
  