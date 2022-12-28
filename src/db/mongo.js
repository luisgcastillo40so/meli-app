const mongoose = require("mongoose")

const dbConnection = () => {
  const DB_URI = process.env.DB_MONGO_URI

  return mongoose.connect(
    DB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  )
}

module.exports = dbConnection
