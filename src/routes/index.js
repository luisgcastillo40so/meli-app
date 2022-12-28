const { Router } = require("express")

const router = Router({ mergeParams: true })

router.use("/auth", require("./auth"))
router.use("/product", require("./product"))
router.use("/user", require("./user"))

module.exports = router
