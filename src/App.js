const express = require("express")
const cors = require("cors")
const app = express()
const server = require("http").createServer(app);

app.use(cors())
app.use(express.static("public"))
app.use(express.json())
app.use(require("./middlewares/upload").any())

// Setting
app.set("port", process.env.PORT || 8080)

// Middleware

// Routes
app.use("/api", require("./routes/"))

module.exports = server
