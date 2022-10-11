const { matchedData } = require("express-validator")
const { encrypt, compare } = require("../utils/handlePassword")
const { signToken } = require("../utils/handleJWT")
const { userModel } = require("../models")
const handleThrowHttpError = require("../utils/handleThrowHttpError")

const updateUser = async (req, res) => {
  user = req.user
  req = matchedData(req)
  try {
    if (req.password) {
      req.password = await encrypt(req.password)
    }
    user = await userModel.findByIdAndUpdate(user["_id"], {
      "$set": req
    }, {
      new: true
    })
    user.set("password", undefined, { strict: false })
  } catch (error) {
    handleThrowHttpError(res, 500, error)
    if (error.code === 11000) handleThrowHttpError(res, 409, { code: 1, message: "Email alredy in use" })
    return
  }
  res.send({
    token: signToken(user),
    user
  })
}

const deleteUser = async () => {
  req = matchedData(req)
  res.send("pong")
}

const getUser = async () => {
  res.send("pong")
  handleThrowHttpError(res, 401, { code: 2, message: "Invalid email or password" })
  return
}

module.exports = {
  updateUser,
  deleteUser,
  getUser
}
