const express = require("express")
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require("mongoose")
const multer = require('multer');
const EsgReport = require("./Schemas/EsgReport.js")




const { login, signUp} = require("./Controllers/EsgUsers.js")
const { getQuestions, saveResponse, getReports } = require("./Controllers/Questions.js")

require('dotenv').config()
const app = express()


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect(process.env.DB_CONNECT)
const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, 'public')
    },
    filename: function (req, file, cb){
        cb(null, file.originalname)
    }
})
const upload =  multer({ storage: storage }).single("file");

app.post("/upload", (req, res) => {
    upload(req, res, async function(err){
        const esgReport = await EsgReport.findOne({cin: req.body.cin})
        esgReport.attachedFiles.push(req.file.originalname)
        esgReport.save()
        res.json({status: 200})
    })
})

app.post("/files", async (req, res) => {
    res.download(`./public/${req.body.filename}`)
})

app.post("/api/saveResponse", saveResponse);

app.post("/api/login", login)

app.post("/api/signUp", signUp)

app.get("/api/getQuestions/:cin", getQuestions)

app.get("/api/getReports/:email", getReports)

app.listen("4002", () => {
    console.log("Server running...")
})