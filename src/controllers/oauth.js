const oauthMeli = require("../auth/meli")

const getToken = {
  meli: oauthMeli.getToken,
}

const refreshToken = {
  meli: oauthMeli.refreshToken,
}

const controller = {
  getToken: (req, res) => {
    const { provider, code } = req.params
    if (Object.getOwnPropertyNames(getToken).includes(provider)) {
      getToken[provider](code).then((token) => res.send(token))
    } else {
      res.status(404).send({ error: "Provider not found" })
    }
  },
  refreshToken: (req, res) => {
    const { provider, token } = req.params
    if (Object.getOwnPropertyNames(refreshToken).includes(provider)) {
      refreshToken[provider](token).then((token) => res.send(token))
    } else {
      res.status(404).send({ error: "Provider not found" })
    }
  },
}

module.exports = controller
