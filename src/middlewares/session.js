const handleThrowHttpError = require("../utils/handleThrowHttpError")
const { verifyToken } = require("../utils/handleJWT")
const { userModel } = require("../models")

const authMiddleware = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      handleThrowHttpError(res, 401, "NOT TOKEN")
      return
    }
    const token = req.headers.authorization.split(" ").pop()
    const dataToken = verifyToken(token)
    if (!dataToken || !dataToken.userId) {
      handleThrowHttpError(res, 403, "INVALID TOKEN")
      return
    }
    const user = await userModel.findById(dataToken.userId)

    !user && handleThrowHttpError(res, 403, "INVALID TOKEN")

    req.user = user
    next()
  } catch (err) {
    handleThrowHttpError(res, 500, "")
  }
}
module.exports = authMiddleware
