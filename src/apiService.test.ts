const apiService = require("./apiService")
const constants = require("./constants")

const setUp = () => {
  const time = constants.time
  const weather = constants.weather
  const payload = constants.location

  const error = "arguments not passed"
  const expected = {
    time,
    weather
  }

  return { expected, payload, error }
}

test("apiService() should return expected weather and time", () => {
  const { expected, payload } = setUp()

  return apiService(payload).then(data => {
    expect(data).toEqual(expect.objectContaining(expected))
  })
})
