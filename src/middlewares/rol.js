const handleThrowHttpError = require("../utils/handleThrowHttpError")

/**
 * @description - Array with the allowed roles
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const checkRole = (roles) => (req, res, next) => {
  try {
    req.user.rol.some((rol) => roles.includes(rol))
      ? next()
      : handleThrowHttpError(res, 403, "Unahuthorized")
  } catch (err) {
    handleThrowHttpError(res, 500, "")
  }
}

module.exports = checkRole
