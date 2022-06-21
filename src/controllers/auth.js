const { matchedData } = require("express-validator")
const { encrypt, compare } = require("../utils/handlePassword")
const { signToken } = require("../utils/handleJWT")
const { userModel } = require("../models")
const handleThrowHttpError = require("../utils/handleThrowHttpError")
const thirdAuth = require("../config/auth")

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

const getToken = async (req, res) => {
  try {
    const provider = req.path.split("/").pop()
    const { code } = matchedData(req)
    const providerResponse = await thirdAuth.getToken(provider, code)

    console.log(providerResponse)
    providerResponse.error
      ? handleThrowHttpError(
          res,
          providerResponse.error.status,
          providerResponse.error.message
        )
      : res.send(providerResponse)
  } catch (err) {
    handleThrowHttpError(res, 500, "")
  }
}

const refreshToken = async (req, res) => {
  try {
    const provider = req.path.split("/").pop()
    const { token } = matchedData(req)

    const providerResponse = await thirdAuth.refreshToken(provider, token)

    if (providerResponse.status === 200) {
      const newToken = await providerResponse.json()
      res.send({ token: newToken })
      return
    }
    console.log(await providerResponse.json())
    console.log(providerResponse.status)
    handleThrowHttpError(res, providerResponse.status, "ALGO MALIO SAL")
  } catch (err) {
    handleThrowHttpError(res, 500, "")
  }
}

module.exports = {
  register,
  login,
  getToken,
  refreshToken,
}
