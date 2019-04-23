const getTime = ({ dstOffset, rawOffset, timestamp }) => {
  const offset = dstOffset + rawOffset
  const cityTimeStamp = (offset + timestamp) * 1000
  const localDate = new Date(cityTimeStamp)
  return localDate.toLocaleString()
}

module.exports = getTime
