var express = require("express")
var path = require("path")
var cookieParser = require("cookie-parser")
var logger = require("morgan")
require("dotenv").config()
require("./config/database")

var app = express()

app.use(logger("dev"))
app.use(express.json())
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))

app.use("/api/users", require("./routes/api/users"))

module.exports = app
