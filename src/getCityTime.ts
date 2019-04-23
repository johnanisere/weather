const axios = require("axios")

const URL = "https://maps.googleapis.com/maps/api/timezone/json?location"
const APIKEY = "AIzaSyBwMIvvsLFQGgOjjcYW2o3pi_tMlJpVpQc"

const getCityTime = (location, timestamp) =>
  axios.get(`${URL}=${location}&timestamp=${timestamp}&key=${APIKEY}`)

module.exports = getCityTime
