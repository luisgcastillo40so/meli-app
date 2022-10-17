const handleMultiPart = (req, res, next) => {
  req.body.files = req.files
  next()
}

module.exports = handleMultiPart