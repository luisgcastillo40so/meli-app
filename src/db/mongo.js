const mongoose = require("mongoose")

const dbConnection = () => {
  const DB_URI = process.env.DB_MONGO_URI

  mongoose.connect(
    DB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) {
        console.log("*** Error connecting to MongoDB:", err)
      } else {
        console.log("*** Database connected ***")
      }
    }
  )
}

module.exports = dbConnection
