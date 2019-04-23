import axios from "axios"
import getWeather from "./getWeather"

test("getWeather() should return an instance of axios", () => {
  expect(getWeather()).toBeInstanceOf(axios)
})
