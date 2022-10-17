require("dotenv").config()
const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.static("public"))
app.use(express.json())
const multer = require("multer")

const storage = multer.diskStorage({
  destination: './temp',
  filename: function (req, file, callback) {
    callback(null, `${+ new Date()}${file.originalname}`);
  }
});

const upload = multer({ storage: storage })
app.use(upload.any())

// Setting
app.set("port", process.env.PORT || 8080)

// Middleware

// Routes
app.use("/api", require("./routes/"))

module.exports = app
