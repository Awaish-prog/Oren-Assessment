const express = require("express")
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config()
const mongoose = require("mongoose")

const { login, signUp} = require("./Controllers/EsgUsers.js")
const { getQuestions } = require("./Controllers/Questions.js")

mongoose.connect(process.env.DB_CONNECT)


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post("/api/login", login)

app.post("/api/signUp", signUp)

app.get("/api/getQuestions", getQuestions)

app.listen("4002", () => {
    console.log("Server running...")
})