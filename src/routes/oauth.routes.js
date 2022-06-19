const { Router } = require("express")
const { getToken, refreshToken } = require("../controllers/oauth.controller")
const router = Router({ mergeParams: true })

router.post("/token/:provider/:code", getToken)
router.post("/refresh/:provider/:token", refreshToken)

module.exports = router
