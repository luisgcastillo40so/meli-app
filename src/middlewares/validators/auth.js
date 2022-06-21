const { check, query } = require("express-validator")
const validationResult = require("../../utils/handleValidator")

const validateRegister = [
  check("email").bail().exists().isEmail(),
  check("password").bail().exists().isLength({ min: 6 }),
  check("name").bail().exists().isLength({ min: 3, max: 50 }),
  validationResult,
]

const validateLogin = [
  check("email").bail().exists().isEmail(),
  check("password").bail().exists().isLength({ min: 6 }),
  validationResult,
]

const validateCode = [
  query("code").bail().exists().isLength({ min: 3, max: 50 }),
  validationResult,
]

const validateToken = [
  query("token").bail().exists().isLength({ min: 3, max: 50 }),
  validationResult,
]

module.exports = {
  validateRegister,
  validateLogin,
  validateCode,
  validateToken,
}
