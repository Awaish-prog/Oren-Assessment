const express = require("express")
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config()
const { login, signUp} = require("./Controllers/EsgUsers.js")
const mongoose = require("mongoose")

mongoose.connect(process.env.DB_CONNECT)


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post("/api/login", login)

app.post("/api/signUp", signUp)

app.listen("4002", () => {
    console.log("Server running...")
})