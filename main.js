import './style.css'

let cityInput = document.getElementById('city')
let cityInfo = document.getElementById('information')
let cityForm = document.getElementById('formInfo')

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

async function showInfo(e) {
  e.preventDefault()
  cityInfo.innerHTML = `<h2>${await cityInput.value}</h2>
  <div class="info">Temperatura: ${await getTemp(cityInput.value)} K </div>
  <div class="info">Feels like: ${await getTempFeelsLike(cityInput.value)} K</div>
  <div class="info">Humedad: ${await getHumidity(cityInput.value)}</div>
  <div class="info">Wind speed: ${await getWindSpeed(cityInput.value)} km/h</div>
  <div class="info">Clima: ${await getWeather(cityInput.value)}</div>` 
}

cityForm.addEventListener('submit', showInfo)

