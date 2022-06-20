const app = require("./app")
const dbConnection = require("./db/mongo")

app.listen(app.get("port"), () => {
  console.log(`Server listening on port ${app.get("port")}`)
})

dbConnection()
