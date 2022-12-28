const ErrorHandler = ({ status = 500, message = "Inernal server error." }, req, res, next) => {
  res.status(status).json({
    status,
    message
  })
}

module.exports = ErrorHandler