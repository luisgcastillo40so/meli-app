const fetch = require("node-fetch")

const {
  MELI_APP_ID,
  MELI_CLIENT_SECRET,
  MELI_TOKEN_URI,
  MELI_REDIRECT_URI,
} = require("../config/config")

const oauthMeli = {
  getToken: (code) => {
    console.log(code)
    return fetch(MELI_TOKEN_URI, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
      body: `grant_type=authorization_code&client_id=${MELI_APP_ID}&client_secret=${MELI_CLIENT_SECRET}&code=${code}&redirect_uri=${MELI_REDIRECT_URI}`,
    }).then((res) => res.json())
  },

  refreshToken: (refreshToken) => {
    console.log(refreshToken)
    return fetch(MELI_TOKEN_URI, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
      body: `grant_type=refresh_token&client_id=${MELI_APP_ID}&client_secret=${MELI_CLIENT_SECRET}&refresh_token=${refreshToken}`,
    }).then((res) => res.json())
  },
}

module.exports = oauthMeli
