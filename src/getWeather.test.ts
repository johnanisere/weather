const axios = require("axios")
const getWeather = require("./getWeather")

test("getWeather() should return an instance of Function", () => {
  expect(getWeather()).toBeInstanceOf(Function)
})
