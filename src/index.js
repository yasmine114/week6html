let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Firday",
  "Saturday",
];
let day = days[now.getDay()];
let h3 = document.querySelector("h3");

let hours = now.getHours();
let minutes = now.getMinutes();
h3.innerHTML = `${day}, ${hours}:${minutes}`;

function showWeatherCondition(response) {
  document.querySelector(".city").innerHTML = response.data.name;
  document.querySelector("h2").innerHTML = `${Math.round(
    response.data.main.temp
  )}°C`;
}

function searchCity(city) {
  let apiKey = "1aab03fdfe08555bc0eb81dd700e783e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeatherCondition);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-input").value;
  searchCity(city);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);
