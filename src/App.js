const express = require("express")
const app = express()

// Setting
app.set("port", process.env.PORT || 8080)
app.set(express.static(__dirname + "/public"))

// Middleware

// Routes
app.use(express.json())
app.use("/", require("./routes/index.routes"))
app.use("/auth", require("./routes/oauth.routes"))
app.use("/oauth", require("./routes/oauth.routes"))
app.use("/notifications", require("./routes/notification.routes"))

module.exports = app
