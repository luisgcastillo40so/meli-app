require("dotenv").config()
const server = require("./app")
const dbConnection = require("./db/mongo")
require("./socketio").addEvents(server)


server.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`)
})

dbConnection()
