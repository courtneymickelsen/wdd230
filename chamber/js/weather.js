// const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5596475&units=imperial&appid=6c49c8e9bde6de88267a321d69a9f850";

// fetch(apiURL)
// .then((response) => response.json())
// .then((jsObject) => {
//     console.log(jsObject);
//     const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
//     const desc = jsObject.weather[0].description;
//     const condition = jsObject.weather[0].main;
//     const windspeed = jsObject.wind.speed;
//     const temp = jsObject.main.temp;
    
//     document.querySelector('.current-temp').textContent = temp;
//     document.querySelector('.current-condition').textContent = condition;
//     document.querySelector('.wind-speed').textContent = windspeed;
//     document.querySelector('.weather-icon').setAttribute('src', iconsrc);
//     document.querySelector('.weather-icon').setAttribute('alt', desc);
// });