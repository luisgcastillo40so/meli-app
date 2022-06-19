require("dotenv").config()

const MELI_APP_ID = process.env.MELI_APP_ID
const MELI_CLIENT_SECRET = process.env.MELI_CLIENT_SECRET
const MELI_TOKEN_URI = "https://api.mercadolibre.com/oauth/token"
const MELI_REDIRECT_URI = "https://meli-app-three.vercel.app/"

module.exports = {
  MELI_APP_ID,
  MELI_CLIENT_SECRET,
  MELI_TOKEN_URI,
  MELI_REDIRECT_URI,
}
