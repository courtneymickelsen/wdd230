let currentTemp = document.querySelector('.current-temp');
let windSpeed = document.querySelector('.wind-speed');
let windChill = document.querySelector('.wind-chill');
let tempValue = currentTemp.textContent;
let windSpeedValue = windSpeed.textContent; 

const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5596475&units=imperial&appid=6c49c8e9bde6de88267a321d69a9f850";

fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    const condition = jsObject.weather[0].main;
    const windspeed = Math.round(jsObject.wind.speed);
    const temp = Math.round(jsObject.main.temp);
    
    document.querySelector('.current-temp').textContent = temp;
    document.querySelector('.current-condition').textContent = condition;
    document.querySelector('.wind-speed').textContent = windspeed;
    document.querySelector('.weather-icon').setAttribute('src', iconsrc);
    document.querySelector('.weather-icon').setAttribute('alt', desc);
    
    
    if (temp <= 50) { 
        if (windspeed > 3) {
            let windChillValue = (35.74 + 0.6215 * temp - 35.75 * windspeed**0.16 + 0.4275 * temp * windspeed**0.16);
            windChill.textContent = Math.round(windChillValue);
        }
        else {
            windChill.textContent = "N/A";
        };
    }
    else {
        windChill.textContent = "N/A";
    };
});
