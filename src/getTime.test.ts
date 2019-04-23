const getTime = require("./getTime")

const setUp = () => {
  const dstOffset = 3600
  const rawOffset = -28800
  const timestamp = 1555978627.28
  const expected = "4/22/2019, 6:17:07 PM"

  const payload = {
    dstOffset,
    rawOffset,
    timestamp
  }
  return { expected, payload }
}

test("getTime() should return expected time", () => {
  const { expected, payload } = setUp()
  expect(getTime(payload)).toEqual(expected)
})
