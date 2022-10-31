const { Router } = require("express")
const {
  updateUser,
  deleteUser
} = require("../controllers/user.controller")
const handleMultiPart = require("../middlewares/handleMultiPart")
const session = require("../middlewares/session")
const { validateUpdateUser } = require("../middlewares/validators/user")

const router = Router()

router.put("/", session, handleMultiPart, validateUpdateUser, updateUser)
router.delete("/", session, deleteUser)

module.exports = router 