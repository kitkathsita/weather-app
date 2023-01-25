import './style.css'

fetch('https://api.openweathermap.org/data/2.5/weather?q=London&APPID=41e4217547ae32a4604d50bba391d674')
  .then (function(response) {
    //good response
  })
  .catch (function(response) {
    //error
  })

async function getWeatherInfo(city) {
  let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=41e4217547ae32a4604d50bba391d674`)
  let weatherInfo = await response.json()
  console.log(weatherInfo)
  return weatherInfo
}

async function getTemp(city) {
  let cityInfo = await getWeatherInfo(city)
  console.log(cityInfo.main.temp)
  return cityInfo.main.temp
}

async function getTempFeelsLike(city) {
  let cityInfo = await getWeatherInfo(city)
  console.log(cityInfo.main.feels_like)
  return cityInfo.main.feels_like
}

async function getHumidity(city) {
  let cityInfo = await getWeatherInfo(city)
  console.log(cityInfo.main.humidity)
  return cityInfo.main.humidity
}

async function getWeather(city) {
  let cityInfo = await getWeatherInfo(city)
  console.log(cityInfo.weather[0].description)
  return cityInfo.weather[0].description
}

async function getWindSpeed(city) {
  let cityInfo = await getWeatherInfo(city)
  console.log(cityInfo.wind.speed)
  return cityInfo.wind.speed
}

getTemp('bucaramanga')
getTempFeelsLike('bucaramanga')
getHumidity('bucaramanga')
getWeather('bucaramanga')
getWindSpeed('bucaramanga')