const axios = require("axios")
const constants = require("./constants")
const getWeather = require("./getWeather")
jest.mock("axios")

const setUp = () => {
  const expected = constants.weather
  return { expected }
}

test("getWeather() should return expected weather", () => {
  const { expected } = setUp()
  const resp = { data: expected }
  axios.get.mockResolvedValue(resp)

  return getWeather().then(data => {
    expect(data).toEqual(expect.objectContaining(resp))
  })
})
