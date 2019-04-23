const getWeather = require("./getWeather")
const getCityTime = require("./getCityTime")
const handleError = require("./handleError")
const getWeatherAndTime = require("./getWeatherAndTime")

const service = async city => {
  try {
    const weather = await getWeather(city)

    const location = `${weather.data.coord.lat},${weather.data.coord.lon}`

    const targetDate = new Date()
    const timestamp =
      targetDate.getTime() / 1000 + targetDate.getTimezoneOffset() * 60

    const time = await getCityTime(location, timestamp)

    const weatherAndTime = getWeatherAndTime(time, timestamp, weather)

    return weatherAndTime
  } catch (err) {
    handleError(err)
  }
}

module.exports = service
