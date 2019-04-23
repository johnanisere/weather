const getTime = require("./getTime")

const setUp = () => {
  const dstOffset = 3600
  const rawOffset = -28800
  const timestamp = 1555978627.28
  const expected =
    "Mon Apr 22 2019 18:17:07 GMT+0100 (West Africa Standard Time)"

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
