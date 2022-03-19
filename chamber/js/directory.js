const requestURL = "https://courtneymickelsen.github.io/wdd230/chamber/json/data.json";
const directory = document.querySelector('.directory');

fetch(requestURL)
.then(function (jsonObject) {
    for (i = 0; i < jsonObject.length; i++) {
        document.createElement("");
    }
});