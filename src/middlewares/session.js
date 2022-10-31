const handleThrowHttpError = require("../utils/handleThrowHttpError")
const { verifyToken } = require("../utils/handleJWT")
const { userModel } = require("../models")

const session = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      handleThrowHttpError(res, 401, { code: 01, message: "NOT TOKEN" })
      return
    }
    const token = req.headers.authorization.split(" ").pop()
    const dataToken = verifyToken(token)
    if (!dataToken || !dataToken.user["_id"]) {
      handleThrowHttpError(res, 403, { code: 02, message: "Invalid token" })
      return
    }
    const user = await userModel.findById(dataToken.user["_id"]).select("+password")
    !user && handleThrowHttpError(res, 403, { code: 01, message: "Invalid token" })
    req.user = user
    next()
  } catch (err) {
    handleThrowHttpError(res, 500, "")
  }
}
module.exports = session
