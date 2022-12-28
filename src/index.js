require("dotenv").config()
const server = require("./app")
const dbConnection = require("./db/mongo")
require("./socketio").addEvents(server)


dbConnection()
  .then(() => {
    console.log("*** DATABASE CONNECTED ***")
    server.listen(process.env.PORT, () => {
      console.log(`Server listening on port ${process.env.PORT}`)
    })
  })
  .catch((err) => {
    console.log(err)
    console.log("*** DATABASE CONNECTION FAILED ***")
  })


