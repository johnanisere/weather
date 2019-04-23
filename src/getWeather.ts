const axios = require("axios")

const URL = "https://api.openweathermap.org/data/2.5/weather?q"
const APPID = "9b1f4b37978b486eeb8287c5d22354fc"

const getWeather = city => axios.get(`${URL}=${city}&appid=${APPID}`)

module.exports = getWeather
