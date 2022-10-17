const { body, oneOf } = require("express-validator")
const validationResult = require("../../utils/handleValidator")

const validateUpdateUser = [
  body("email")
    .isEmail(),
  oneOf([
    body("newPassword")
      .isStrongPassword({
        minLength: 6,
        minLowercase: 1,
        minNumbers: 1,
        minSymbols: 1
      })
      .custom((value, { req }) => {
        if (value === req.body.confirmPassword) return true
        else throw new Error("the passwords are different")
      }),
    body("newPassword").custom((value, { req }) => {
      if (value === "" && req.body.confirmPassword === "") return true
      else throw new Error("the passwords are different")
    })
  ], "invalid password"),
  body("storeName")
    .exists()
    .isLength({ min: 3, max: 50 }),
  oneOf([
    body("backendUri").isEmpty(),
    body("backendUri").isURL()
  ], "invalid base url"),
  oneOf([
    body("customersEndpoint").exists({
      checkFalsy: true
    }).matches(/^[a-z]+(\/[a-z]+)*$/gi),
    body("customersEndpoint").isEmpty()
  ], "invalid customersEndpoint"),
  oneOf([
    body("suppliersEndpoint").exists({
      checkFalsy: true
    }).matches(/^[a-z]+(\/[a-z]+)*$/gi),
    body("suppliersEndpoint").isEmpty()
  ], "invalid suppliersEndpoint"),
  oneOf([
    body("supportEndpoint").exists({
      checkFalsy: true
    }).matches(/^[a-z]+(\/[a-z]+)*$/gi),
    body("supportEndpoint").isEmpty()
  ], "invalid supportEndpoint"),
  oneOf([
    body("ordersEndpoint").exists({
      checkFalsy: true
    }).matches(/^[a-z]+(\/[a-z]+)*$/gi),
    body("ordersEndpoint").isEmpty()
  ], "invalid ordersEndpoint"),
  oneOf([
    body("customersEndpoint").exists({
      checkFalsy: true
    }).matches(/^[a-z]+(\/[a-z]+)*$/gi),
    body("customersEndpoint").isEmpty()
  ], "invalid customersEndpoint"),
  body("address")
    .isString(),
  validationResult,
]

module.exports = {
  validateUpdateUser
}