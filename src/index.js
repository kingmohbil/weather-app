import { Weather } from "./weather-class";
const form = document.querySelector(".location-search");
const description = document.querySelector(".weather-description");
const location = document.querySelector(".weather-location");
const temp = document.querySelector(".wether-temp");
const feels_like = document.querySelector("[data-feels-like]");
const wind = document.querySelector("[data-wind]");
const humidity = document.querySelector("[data-humidity]");
// this function here displays the weather to the page
function displayWeather(d, l, t, f, w, h) {
  description.textContent = d;
  location.textContent = l;
  temp.innerHTML = `${t}<sup class="temp-sup">&#x2103;</sup>`;
  feels_like.innerHTML = `Feels like: ${f}<sup>&#x2103;</sup>`;
  wind.textContent = `WIND: ${w} KMH`;
  humidity.textContent = `HUMIDITY: ${h}%`;
}
// this function here fetches the weather data, and resolve or reject depending on the response
async function getWeatherData(url) {
  try {
    const response = await fetch(url, {
      mode: "cors",
      method: "GET",
    });
    const jsonData = await response.json();
    const weather = new Weather(jsonData);
    displayWeather(
      weather.getDescription(),
      weather.getLocation(),
      weather.getTemp(),
      weather.getFeel(),
      weather.getWind(),
      weather.getHumidity()
    );
  } catch (err) {
    console.error(err);
  }
}
getWeatherData(
  `https://api.openweathermap.org/data/2.5/weather?q=London&APPID=393b1064ba15f35b51ead68d63391f61&units=metric`
);

form.addEventListener("submit", (e) => {
  const loc = form.location.value;
  e.preventDefault();
  getWeatherData(
    `https://api.openweathermap.org/data/2.5/weather?q=${loc}&APPID=393b1064ba15f35b51ead68d63391f61&units=metric`
  ).catch((error) => {
    console.error(error);
  });
  form.reset();
});
