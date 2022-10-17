const { matchedData } = require("express-validator")
const { encrypt, compare } = require("../utils/handlePassword")
const { signToken } = require("../utils/handleJWT")
const { userModel } = require("../models")
const handleThrowHttpError = require("../utils/handleThrowHttpError")
const handleDiscordUploads = require("../utils/handleDiscordUploads")

const updateUser = async (req, res) => {
  try {
    const { body, files, user } = req
    const newData = {
      settings: {}
    }
    // General
    if (body.email !== user.email) newData.email = body.email
    if (body.storeName !== user.storeName) newData.storeName = body.storeName
    if (body.address !== user.address) newData.address = body.address
    if (body.newPassword) newData.password = await encrypt(body.newPassword)
    // Settigns
    if (body.backednUri !== user.settings.backednUri) settings.newData.backednUri = body.backednUri
    if (body.backendToken !== user.settings.backendToken) newData.settings.backendToken = body.backendToken
    if (body.ordersEndpoint !== user.settings.ordersEndpoint) newData.settings.ordersEndpoint = body.ordersEndpoint
    if (body.productsEndpoint !== user.settings.productsEndpoint) newData.settings.productsEndpoint = body.productsEndpoint
    if (body.customersEndpoint !== user.settings.customersEndpoint) newData.settings.customersEndpoint = body.customersEndpoint
    if (body.suppliersEndpoint !== user.settings.suppliersEndpoint) newData.settings.suppliersEndpoint = body.suppliersEndpoint
    if (body.supportEndpoint !== user.settings.supportEndpoint) newData.settings.supportEndpoint = body.supportEndpoint

    if (files.length) {
      const response = await handleDiscordUploads(files)
      newData.profileImage = response[0].attachments[0].url
    }

    user = await userModel.findByIdAndUpdate(user["_id"], {
      "$set": newData
    }, {
      new: true
    })
    user.set("password", undefined, { strict: false })
  } catch (error) {
    handleThrowHttpError(res, 500, error)
    if (error.code === 11000) handleThrowHttpError(res, 409, { code: 1, message: "Email alredy in use" })
    return
  }
  res.send({
    token: signToken(user),
    user
  })

}

const deleteUser = async (req, res) => {
  console.log(req.body)
  res.send("pong")
}

const getUser = async (req, res) => {
  res.send("pong")
  handleThrowHttpError(res, 401, { code: 2, message: "Invalid email or password" })
  return
}

module.exports = {
  updateUser,
  deleteUser,
  getUser
}
