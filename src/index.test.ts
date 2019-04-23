const index=require(./index)

const setUp = () => {
  const payload = "New York, 10005, Tokyo, São Paulo, Pluto"
  const weather = {
    coord: {
      lon: -73.99,
      lat: 40.73
    },
    weather: [
      {
        id: 500,
        main: "Rain",
        description: "light rain",
        icon: "10n"
      },
      {
        id: 701,
        main: "Mist",
        description: "mist",
        icon: "50n"
      }
    ],
    base: "stations",
    main: {
      temp: 287.33,
      pressure: 1016,
      humidity: 87,
      temp_min: 285.93,
      temp_max: 288.71
    },
    visibility: 16093,
    wind: {
      speed: 3.6,
      deg: 360
    },
    rain: {
      "1h": 0.35
    },
    clouds: {
      all: 90
    },
    dt: 1555981225,
    sys: {
      type: 1,
      id: 4026,
      message: 0.0115,
      country: "US",
      sunrise: 1555927616,
      sunset: 1555976502
    },
    id: 5128581,
    name: "New York",
    cod: 200
  }

  const time = "Mon Apr 22 2019 18:17:07 GMT+0100 (West Africa Standard Time)"

  const expected = {
    time,
    weather
  }

  return { expected,payload }
}

test("index() should return expected weather and time",()=>{
  const {expected,payload}=setUp()

  return index(payload).then(data => {
    expect(data).toEqual(expect.objectContaining(expected))
  })
})
