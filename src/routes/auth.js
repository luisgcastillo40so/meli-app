const { Router } = require("express")
const {
  signup,
  login,
  getToken,
  refreshToken,
} = require("../controllers/auth")
const {
  validateSignup,
  validateLogin,
  validateCode,
  validateToken,
} = require("../middlewares/validators/auth")

const router = Router()

router.post("/login", validateLogin, login)

router.post("/signup", validateSignup, signup)

const oauthProviders = ["meli"]

oauthProviders.forEach((provider) => {
  router.post(`/token/${provider}`, validateCode, getToken)
  router.post(`/refresh/${provider}`, validateToken, refreshToken)
})

module.exports = router
