const { Router } = require("express")
const { register, login } = require("../controllers/auth")
const { validateRegister, validateThirdParty } = require("../validators/auth")
const router = Router()

router.post("/login", login)
router.post("/register", validateRegister, register)

/* 

const { Router } = require("express")
const router = Router({ mergeParams: true })

router.post("/token/:provider/:code", getToken)
router.post("/refresh/:provider/:token", refreshToken)


*/

module.exports = router
