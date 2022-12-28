const providers = {
  meli: require("./oauth/meli"),
}

module.exports = {
  getToken: (provider, code) => providers[provider].getToken(code),
  refreshToken: (provider, code) => providers[provider].refreshToken(code),
}
