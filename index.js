const dotenv = require("dotenv")
const express = require("express")
const fs = require("fs")
const app = express()
app.use(express.json())

app.set("port", process.env.PORT || 8080)

app.set(express.static(__dirname + "/public"))
app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.post("/callback", (req, res) => {
  console.log(req.body)
  res.send("Hello World!")
})

app.post("/notifications", (req, res) => {
  res.status(200).send("OK")
})

app.listen(app.get("port"), () => {
  console.log(`Server listening on port ${app.get("port")}`)
})
