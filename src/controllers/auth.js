const { matchedData } = require("express-validator")
const { encrypt, compare } = require("../utils/handlePassword")
const { signToken, verifyToken } = require("../utils/handleJWT")
const { userModel } = require("../models")
const handleThrowHttpError = require("../utils/handleThrowHttpError")
const register = async (req, res) => {
  req = matchedData(req)
  const password = await encrypt(req.password)
  const body = { ...req, password }
  const user = await userModel.create(body)
  user.set("password", undefined, { strict: false })

  res.send({
    token: signToken(user),
    user,
  })
}

const login = async (req, res) => {
  const { email, password } = matchedData(req)
  const user = await userModel.findOne({ email }).select("password role name")

  if (user) {
    const isMatch = await compare(password, user.password)
    user.set("password", undefined, { strict: false })
    isMatch && res.send({ token: signToken(user), user })
  }

  handleThrowHttpError(res, 401, "Invalid email or password")
  return
}

module.exports = {
  register,
  login,
}
