
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

    const today = document.querySelector('.today');
    const tomorrow = document.querySelector('.tomorrow');
    const overmorrow = document.querySelector('.overmorrow');
    let date1 = new Date;
    let date2 = new Date;
    let date3 = new Date;
    date2.setDate(date2.getDate() + 1);
    date3.setDate(date3.getDate() + 2);
    
    today.textContent = date1.toLocaleDateString('en-US', {weekday:'long', month:'long', day:'numeric'});
    tomorrow.textContent = date2.toLocaleDateString('en-US', {weekday:'long', month:'long', day:'numeric'});
    overmorrow.textContent = date3.toLocaleDateString('en-US', {weekday:'long', month:'long', day:'numeric'});
    
    const day1 = document.querySelector('.day1');
    const day2 = document.querySelector('.day2');
    const day3 = document.querySelector('.day3');
    let day1v = Math.round(jsObject.daily[0].temp.day);
    let day2v = Math.round(jsObject.daily[1].temp.day);
    let day3v = Math.round(jsObject.daily[2].temp.day);
    day1.innerHTML = `High: ${day1v}&#176;`;
    day2.innerHTML = `High: ${day2v}&#176;`;
    day3.innerHTML = `High: ${day3v}&#176;`;
});
