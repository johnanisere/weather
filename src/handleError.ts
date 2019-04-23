const handleErrors = err => {
  if (err.response && err.response.data && err.response.data.error) {
    console.log(err.response.data.error)
  } else {
    console.log(err.message)
  }
}

module.exports = handleErrors
