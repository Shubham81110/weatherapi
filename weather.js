const inputBox = document.querySelector(".input-box");
const searchBtn = document.querySelector(".btn");
const weather_img = document.querySelector(".weather-img");
const temperature = document.querySelector(".temp");
const description = document.querySelector(".description");
const humidity = document.getElementById("humidity");
const wind_speed = document.getElementById("wind-speed");

const location_not_found = document.querySelector(".location_not_found");
const weather_body = document.querySelector(".weather-body");

async function checkWeather(city){
  const api_key = "7f64728f2ef8ede470db4bc99433f125";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
  const weather_data = await fetch(`${url}`).then(response => response.json());
// console.log(weather_data);

if(weather_data.cod === `404`){
  location_not_found.style.display = "flex";
  weather_body.style.display = "none"
  console.log("error");
  return;
}
weather_body.style.display = "block"
location_not_found.style.display = "none";

temperature.innerHTML = `${Math.round(weather_data.main.temp)}°C`;
description.innerHTML = `${weather_data.weather[0].description}`;
humidity.innerHTML = `${weather_data.main.humidity} %`;
wind_speed.innerHTML = `${weather_data.wind.speed} Km/H`


switch(weather_data.weather[0].main){
  case 'Clouds': weather_img.src = "/project weather/img/cloud.png";
      break;
  case 'Clear': weather_img.src = "/project weather/img/clear.png";
      break;
  case 'Rain': weather_img.src = "/project weather/img/rain.png";
      break;
  case 'Mist': weather_img.src = "/project weather/img/mist.png";
      break;
  case 'Snow': weather_img.src = "/project weather/img/snow.png";
      break;
}
}
searchBtn.addEventListener('click', ()=>{
  checkWeather(inputBox.value);
});










// if(weather_data.weather[0] == 'Clouds' ){
//   weather_img.src = "project weather/img/cloudy-day-2.svg" 
// }else if(weather_data.weather[0] == 'Rain' ){
//   weather_img.src = "project weather/img/rainy-1.svg" 
// }else if(weather_data.weather[0] == 'Day' ){
//   weather_img.src = "project weather/img/day.svg" 
// }else if(weather_data.weather[0] == 'Snow' ){
//   weather_img.src = "project weather/img/snowy-2.svg" 
// }else if(weather_data.weather[0] == 'Thunder' ){
//   weather_img.src = "project weather/img/thunder.svg" 
// }else if(weather_data.weather[0] == 'Sunset' ){
//   weather_img.src= "project weather/img/weather_sunset.svg" 
// }



