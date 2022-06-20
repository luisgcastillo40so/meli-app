const jwt = require("jsonwebtoken")
const JWT_SECRET = process.env.JWT_SECRET

/**
 * @description - This function is used to verify the JWT token
 * @param {*} user
 */
const signToken = (user) => {
  return jwt.sign(
    {
      userId: user._id,
      role: user.role,
    },
    JWT_SECRET,
    {
      expiresIn: "1h",
    }
  )
}

/**
 * @description - This function is used to verify the JWT token
 * @param {*} token
 */
const verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET)
  } catch (e) {
    return null
  }
}

module.exports = {
  signToken,
  verifyToken,
}
