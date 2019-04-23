const getTime = require("./getTime")

const getWeatherAndTime = (time, timestamp, weather) => {
  const localeTimeOffsets = {
    dstOffset: time.data.dstOffset,
    rawOffset: time.data.rawOffset,
    timestamp
  }

  const localeTime = getTime(localeTimeOffsets)

  const timeAndWeather = { weather: weather.data, time: localeTime }

  console.log(timeAndWeather)
  return timeAndWeather
}

module.exports = getWeatherAndTime
