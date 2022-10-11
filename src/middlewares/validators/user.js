const { check } = require("express-validator")
const validationResult = require("../../utils/handleValidator")

const validateUpdateUser = [
  check("email").bail().optional().isEmail(),
  check("password").bail().optional().isLength({ min: 6 }),
  check("store-name").bail().optional().isLength({ min: 3, max: 50 }),
  check("settings").bail().optional().isObject(),
  check("settings.backendUri").optional().isURL(),
  check("settings.customersEndpoint").optional().isString().matches(/^[a-z]+(\/[a-z]+)*$/gi),
  check("settings.suppliersEndpoint").optional().isString().matches(/^[a-z]+(\/[a-z]+)*$/gi),
  check("settings.supportEndpoint").optional().isString().matches(/^[a-z]+(\/[a-z]+)*$/gi),
  check("settings.ordersEndpoint").optional().isString().matches(/^[a-z]+(\/[a-z]+)*$/gi),
  check("settings.productsEndpoint").optional().isString().matches(/^[a-z]+(\/[a-z]+)*$/gi),
  validationResult,
]

module.exports = {
  validateUpdateUser
}