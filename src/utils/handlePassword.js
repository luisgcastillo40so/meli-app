const bcryptjs = require("bcryptjs")

/**
 * @description - This function is used to encrypt a password
 * @param {*} password
 */
const encrypt = async (password) => await bcryptjs.hash(password, 10)

/**
 * @description - This function is used to compare a password
 * @param {*} password
 * @param {*} hash
 */
const compare = async (password, hash) => await bcryptjs.compare(password, hash)

module.exports = {
  encrypt,
  compare,
}
