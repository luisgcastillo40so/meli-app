const { Router } = require("express")
const { register, login } = require("../controllers/auth")
const {
  validateRegister,
  validateLogin,
  validateThirdParty,
} = require("../validators/auth")
const router = Router()

router.post("/login", validateLogin, login)
router.post("/register", validateRegister, register)

/* 

const { Router } = require("express")
const router = Router({ mergeParams: true })

router.post("/token/:provider/:code", getToken)
router.post("/refresh/:provider/:token", refreshToken)


*/

module.exports = router
