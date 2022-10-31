const { Router } = require("express")
const {
  getProduct,
  updateProduct,
  deleteProduct,
  createProduct
} = require("../controllers/product.controller")
const handleMultiPart = require("../middlewares/handleMultiPart")
const session = require("../middlewares/session")
const { validateProduct } = require("../middlewares/validators/product")
const router = Router()

router.post("/", session, validateProduct, handleMultiPart, createProduct)
router.get("/", session, getProduct)
router.put("/", session, validateProduct, handleMultiPart, updateProduct)
router.delete("/", session, deleteProduct)

module.exports = router 