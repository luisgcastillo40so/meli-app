const { check } = require("express-validator")
const validationResult = require("../../utils/handleValidator")

const validateRegister = [
  check("email").exists().isEmail(),
  check("password").exists().isLength({ min: 6 }),
  check("name").exists().isLength({ min: 3, max: 50 }),
  validationResult,
]

const validateLogin = [
  check("email").exists().isEmail(),
  check("password").exists().isLength({ min: 6 }),
  validationResult,
]

const validateThirdParty = [check("provider").isIn(["meli"]), validationResult]

const validateCode = [
  check("code")
    .exists()
    .custom((code) => code.includes("code=") || throwError("Invalid code")),
  validationResult,
]

const validateToken = [
  check("token")
    .exists()
    .custom((token) => token.includes("token=") || throwError("Invalid token")),
  validationResult,
]

module.exports = {
  validateRegister,
  validateThirdParty,
  validateLogin,
  validateCode,
  validateToken,
}
