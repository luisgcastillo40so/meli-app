const { check } = require("express-validator")

const validateRegister = [
  check("email").exists().isEmail(),
  check("password").exists().isLength({ min: 6 }),
  check("name").exists().isLength({ min: 3, max: 50 }),
]

const validateThirdParty = [
  check("provider").isIn(["google", "facebook"]),
  check("code").isLength({ min: 1 }),
]

module.exports = {
  validateRegister,
  validateThirdParty,
}
