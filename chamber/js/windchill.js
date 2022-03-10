let currentTemp = document.querySelector('.current-temp');
let windSpeed = document.querySelector('.wind-speed');
let windChill = document.querySelector('.wind-chill');
let tempValue = currentTemp.textContent;
let windSpeedValue = windSpeed.textContent; 

if (tempValue <= 50) { 
    if (windSpeedValue > 3) {
        let windChillValue = 35.74 + 0.6215 * tempValue - 35.75 * windSpeedValue**0.16 + 0.4275 * tempValue * windSpeedValue**0.16;
        windChill.textContent = Math.round(windChillValue);
    }
}
else {
    windChill.textContent = "N/A";
}