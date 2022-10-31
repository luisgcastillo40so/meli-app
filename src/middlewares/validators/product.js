const { body } = require("express-validator")
const validationResult = require("../../utils/handleValidator")

const validateProduct = [
  body("name").exists({
    checkFalsy: true
  }),
  body("price").custom(value => {
    value = parseInt(value)
    if (Number.isNaN(value) || value < 0) throw new Error("price is not a number")
    else return true
  }),
  body("quantity").custom(value => {
    value = parseInt(value)

    if (Number.isNaN(value) || value < 0) throw new Error("price is not a number")
    else return true
  }),
  body("category").exists({
    checkFalsy: true
  }),
  body("files").exists({
    checkFalsy: true
  }).isArray()
  ,
  validationResult,
]

module.exports = {
  validateProduct
}