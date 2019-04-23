const index = require("./index")

const setUp = () => {
  const error = "no argument passed"
  return { error }
}

test("index() should return error message", () => {
  const { error } = setUp()
  expect(index()).toEqual(error)
})
