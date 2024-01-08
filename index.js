// Selecting DOM elements
const temperatureField = document.querySelector(".temp");
const cityField = document.querySelector(".temp_location p");
const dateField = document.querySelector(".temp_location span");
const emojiField = document.querySelector(".weather_condition img");
const weatherField = document.querySelector(".weather_condition span");
const searchField = document.querySelector(".searchField");
const form = document.querySelector("form");

let cityName = 'Pune'

form.addEventListener('submit', function (event) {
    event.preventDefault()
    const cityName = searchField.value
    getWeatherInfo(cityName)
})

async function getWeatherInfo(cityName) {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=3d04e5daa68c432ba46130322230211&q=${cityName}&aqi=no`);
        const weatherData = await response.json();
        console.log(weatherData);

        let temp = weatherData.current.temp_c
        let name = weatherData.location.name
        let condition = weatherData.current.condition.text
        let url = weatherData.current.condition.icon
        let date = weatherData.current.last_updated

        console.log(temp, name, condition, url, date)

        temperatureField.innerText = temp;
        cityField.innerText = name
        dateField.innerText = date
        emojiField.src = url
        weatherField.innerText = condition
}