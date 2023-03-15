const express = require("express")
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require("mongoose")
const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');



const { login, signUp} = require("./Controllers/EsgUsers.js")
const { getQuestions } = require("./Controllers/Questions.js")

require('dotenv').config()
const app = express()


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


mongoose.connect(process.env.DB_CONNECT);

let bucket;
mongoose.connection.on("connected", () => {
  var client = mongoose.connections[0].client;
  var db = mongoose.connections[0].db;
  bucket = new mongoose.mongo.GridFSBucket(db, {
    bucketName: "newBucket"
  });
});

const storage = new GridFsStorage({
    url: process.env.DB_CONNECT,
    file: (req, file) => {
      return new Promise((resolve, reject) => {
        const filename = file.originalname;
        const fileInfo = {
          filename: filename,
          bucketName: "EsgDataFiles"
        };
        resolve(fileInfo);
      });
    }
});
  
const upload = multer({
    storage
});

app.post("/upload", upload.single("file"), (req, res) => {
    res.status(200)
      .send("File uploaded successfully");
});
app.post("/api/login", login)

app.post("/api/signUp", signUp)

app.get("/api/getQuestions", getQuestions)

app.listen("4002", () => {
    console.log("Server running...")
})