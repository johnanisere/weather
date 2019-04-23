import index from "./index"
import constants from "./constants"

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

test("index() should return expected weather and time", () => {
  const { expected, payload } = setUp()

  return index(payload).then(data => {
    expect(data).toEqual(expect.objectContaining(expected))
  })
})

test("index() should return error message", () => {
  const { error } = setUp()
  expect(index()).toEqual(error)
})
