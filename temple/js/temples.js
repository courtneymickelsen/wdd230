const requestURL = "https://courtneymickelsen.github.io/wdd230/temple/json/temples.json";
const templeDiv = document.querySelector('.temple-div');

fetch(requestURL)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    console.table(jsonObject);
    const temples = jsonObject['temples'];
    temples.forEach(displayTemples);
});

function displayTemples(temple) {
    let section = document.createElement('section');
    let dImage = document.createElement('img');
    let dName = document.createElement('h2');
    let dAddress = document.createElement('p');
    let dPhone = document.createElement('p');
    let dServices = document.createElement('p');
    let dClosureSch = document.createElement('p');

    dImage.setAttribute('src', temple.imgFile);
    dName.innerHTML = `${temple.name}`;
    dAddress.innerHTML = `Address:<br>${temple.address}`;
    dPhone.innerHTML = `Phone: ${temple.phoneNumber}`;
    dServices.innerHTML = `Services:<br>${temple.services}`;
    dClosureSch.innerHTML = `Scheduled Closures:<br>${temple.closureSch}`;
    
    templeDiv.appendChild(section);
    section.appendChild(dImage);
    section.appendChild(dName);
    section.appendChild(dAddress);
    section.appendChild(dPhone);
    section.appendChild(dServices);
    section.appendChild(dClosureSch);
};