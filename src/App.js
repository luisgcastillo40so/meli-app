const express = require("express")
const app = express()

app.use(express.static("public"))
app.use(express.json())

// Setting
app.set("port", process.env.PORT || 8080)

// Middleware

// Routes
app.use("/api", require("./routes"))

module.exports = app
