const { check } = require("express-validator")
const validationResult = require("../utils/handleValidator")

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

const validateThirdParty = [
  check("provider").isIn(["google", "facebook"]),
  check("code").isLength({ min: 1 }),
  validationResult,
]

module.exports = {
  validateRegister,
  validateThirdParty,
  validateLogin,
}
