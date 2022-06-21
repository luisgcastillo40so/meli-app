const { Router } = require("express")
const {
  register,
  login,
  getToken,
  refreshToken,
} = require("../controllers/auth")
const {
  validateRegister,
  validateLogin,
  validateCode,
  validateToken,
} = require("../middlewares/validators/auth")

const router = Router()

router.post("/login", validateLogin, login)

router.post("/register", validateRegister, register)

const oauthProviders = ["meli"]

oauthProviders.forEach((provider) => {
  router.post(`/token/${provider}`, validateCode, getToken)

  router.post(`/refresh/${provider}`, validateToken, refreshToken)
})

module.exports = router
