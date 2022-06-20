require("dotenv").config()
const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.static("public"))
app.use(express.json())

// Setting
app.set("port", process.env.PORT || 8080)

// Middleware

// Routes
app.use("/api", require("./routes/"))

module.exports = app
