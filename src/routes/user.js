const { Router } = require("express")
const {
  updateUser,
  deleteUser
} = require("../controllers/user")
const handleMultiPart = require("../middlewares/handleMultiPart")
const authMiddleware = require("../middlewares/session")
const { validateUpdateUser } = require("../middlewares/validators/user")

const router = Router()

router.put("/", authMiddleware, handleMultiPart, validateUpdateUser, updateUser)
router.delete("/", authMiddleware, deleteUser)

module.exports = router 