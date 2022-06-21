const fetch = require("node-fetch")

const MELI_APP_ID = process.env.MELI_APP_ID
const MELI_CLIENT_SECRET = process.env.MELI_CLIENT_SECRET
const MELI_REDIRECT_URI = process.env.MELI_REDIRECT_URI
const MELI_TOKEN_URI = "https://api.mercadolibre.com/oauth/token"

const getToken = (code) => {
  return fetch(MELI_TOKEN_URI, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
    body: `grant_type=authorization_code&client_id=${MELI_APP_ID}&client_secret=${MELI_CLIENT_SECRET}&code=${code}&redirect_uri=${MELI_REDIRECT_URI}`,
  })
}

const refreshToken = (refreshToken) => {
  return fetch(MELI_TOKEN_URI, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
    body: `grant_type=refresh_token&client_id=${MELI_APP_ID}&client_secret=${MELI_CLIENT_SECRET}&refresh_token=${refreshToken}`,
  })
}

module.exports = {
  getToken,
  refreshToken,
}
