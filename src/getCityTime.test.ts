const axios = require("axios")
const getCityTime = require("./getCityTime")

test("getCityTime() should return an instance of Function", () => {
  expect(getCityTime()).toBeInstanceOf(Function)
})
