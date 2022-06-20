const fs = require("fs")
const { Router } = require("express")

const router = Router({ mergeParams: true })

fs.readdirSync(__dirname).forEach((file) => {
	if (file !== "index.js") {
		const route = file.split(".")[0]
		console.log(route)
		router.use(`/${route}`, require(`./${route}`))
	}
})

module.exports = router
