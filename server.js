const express = require("express")
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require("mongoose")
const multer = require('multer');
const EsgReport = require("./Schemas/EsgReport.js")
const fs = require("fs")



const { authentication } = require("./Middlewares/Authentication.js")
const { login, signUp, inviteSomeone} = require("./Controllers/EsgUsers.js")
const { getQuestions, saveResponse, getReports, deleteFile } = require("./Controllers/Questions.js")

require('dotenv').config()
const app = express()


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect("mongodb://localhost:27017")
const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, 'public')
    },
    filename: function (req, file, cb){
        cb(null, file.originalname)
    }
})
const upload =  multer({ storage: storage }).single("file");

app.post("/upload", authentication, (req, res) => {
    upload(req, res, async function(err){
        const esgReport = await EsgReport.findOne({cin: req.body.cin})
        if(!esgReport){
            fs.unlinkSync(`./public/${req.file.originalname}`)
            res.json({status: 404})
            return
        }
        esgReport.attachedFiles.push(req.file.originalname)
        esgReport.save()
        res.json({status: 200})
    })
})

app.post("/files", authentication, async (req, res) => {
    res.download(`./public/${req.body.filename}`)
})

app.post("/api/saveResponse", authentication, saveResponse);

app.post("/api/login", login)

app.post("/api/signUp", signUp)

app.post("/api/inviteSomeone", authentication, inviteSomeone)

app.get("/api/getQuestions/:cin", authentication, getQuestions)

app.get("/api/getReports/:email", authentication, getReports)

app.delete("/api/deleteFile", authentication, deleteFile)

app.listen("4002", () => {
    console.log("Server running...")
})