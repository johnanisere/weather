const apiService = require("./apiService")

const app = city => {
  if (city) {
    return apiService(city)
  }
  return "no argument passed"
}

module.exports = app
