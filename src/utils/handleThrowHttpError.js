/**
 * @description - This function is used to send the errors
 * @param {*} res
 * @param {*} statusCode
 * @param {*} error
 */
const handleThrowHttpError = (res, statusCode, error) => {
  res.status(statusCode).send({
    error
  })
}

module.exports = handleThrowHttpError
