const { Router } = require("express")

const router = Router({ mergeParams: true })

router.get("/", (req, res) => {
  res.send("Hello World!")
})

module.exports = router
