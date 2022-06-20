const { matchedData } = require("express-validator")
const { encrypt, compare } = require("../utils/handlePassword")
const { signToken, verifyToken } = require("../utils/handleJWT")
const { userModel } = require("../models")

/**
 * @description - This function is used to register a new user
 * @param {*} req
 * @param {*} res
 */
const register = async (req, res) => {
  req = matchedData(req)
  const password = await encrypt(req.password)
  const body = { ...req, password }
  const userData = await userModel.create(body)
  userData.set("password", undefined, { strict: false })

  const user = {
    token: signToken(userData),
    user: userData,
  }

  res.send(user)
}

/**
 * @description - This function is used to login a user
 * @param {*} req
 * @param {*} res
 */
const login = async (req, res) => {
  res.send("login")
}

module.exports = {
  register,
  login,
}
