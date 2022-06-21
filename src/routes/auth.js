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
  validateThirdParty,
  validateCode,
  validateToken,
} = require("../middlewares/validators/auth")

const router = Router()

router.post("/login", validateLogin, login)

router.post("/register", validateRegister, register)

router.post(
  "/oauth/token/:provider/:code",
  validateThirdParty,
  validateCode,
  getToken
)
router.post(
  "/oauth/refresh/:provider/:token",
  validateThirdParty,
  validateToken,
  refreshToken
)

module.exports = router
