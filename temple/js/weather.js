
const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=38.98&lon=-77.09&units=imperial&appid=6c49c8e9bde6de88267a321d69a9f850";

fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);
    const condition = jsObject.current.weather[0].main;
    const temp = Math.round(jsObject.current.temp);
    const humidity = Math.round(jsObject.current.humidity);
    
    document.querySelector('.current-temp').textContent = temp;
    document.querySelector('.condition').textContent = condition;
    document.querySelector('.humidity').textContent = humidity;
    
    if (jsObject.hasOwnProperty('alerts')) { 
        const alert = jsObject.alerts.description;
        document.querySelector('.alert-text').textContent = alert;
        document.querySelector('.weather-alert').classList.toggle('invisible');
    };

    const day1 = document.querySelector('.day1');
    const day2 = document.querySelector('.day2');
    const day3 = document.querySelector('.day3');
    let day1c = Math.round(jsObject.daily[0].temp.day);
    let day2c = Math.round(jsObject.daily[1].temp.day);
    let day3c = Math.round(jsObject.daily[2].temp.day);
    day1.innerHTML = `High- ${day1c}&#176;`;
    day2.innerHTML = `High- ${day2c}&#176;`;
    day3.innerHTML = `High- ${day3c}&#176;`;

});
