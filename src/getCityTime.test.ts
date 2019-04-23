const axios = require("axios")
const getCityTime = require("./getCityTime")
jest.mock("axios")

const setUp = () => {
  const payload = {}
  const location = "39.6034810,-119.6822510"
  const timestamp = "1555978627.28"
  return { payload, location, timestamp }
}

test("getCityTime() should return expected time", () => {
  const { payload, location, timestamp } = setUp()
  const resp = { data: payload }
  axios.get.mockResolvedValue(resp)

  return getCityTime(location, timestamp).then(data => {
    expect(data).toEqual(expect.objectContaining(resp))
  })
})
