const constants = require("./constants")
const getWeatherAndTime = require("./getWeatherAndTime")

const setUp = () => {
  const weather = { data: constants.weather }
  const time = constants.cityTime
  const timestamp = constants.timestamp
  const expected = { weather: constants.weather, time: constants.localeTime }

  return { expected, time, weather, timestamp }
}

test("getWeatherAndTime() should return expected weather and time", () => {
  const { expected, time, weather, timestamp } = setUp()

  expect(getWeatherAndTime(time, timestamp, weather)).toEqual(
    expect.objectContaining(expected)
  )
})
