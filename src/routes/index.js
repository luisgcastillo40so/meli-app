const fs = require("fs")
const { Router } = require("express")

const router = Router({ mergeParams: true })

const removeExtension = (file) => file.split(".")[0]

fs.readdirSync(__dirname).forEach((file) => {
  if (file !== "index.js") {
    const route = removeExtension(file)
    router.use(`/${route}`, require(`./${file}`))
  }
})

module.exports = router
