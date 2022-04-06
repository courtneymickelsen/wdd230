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
    let dName = document.createElement('h3');
    let dAddress = document.createElement('p');
    let dPhone = document.createElement('p');
    let dEmail = document.createElement('p');
    let dServices = document.createElement('p');
    let dClosureSch = document.createElement('p');

    dImage.setAttribute('src', temple.imgFile);
    dName.textContent = `${temple.name}`;
    dPhone.textContent = `${temple.phoneNumber}`;
    dAddress.textContent = `${temple.address}`;
    dPhone.textContent = `${temple.phoneNumber}`;
    dEmail.textContent = `${temple.email}`;
    dServices.textContent = `${temple.services}`;
    dClosureSch.textContent = `${temple.closureSch}`;
    
    templeDiv.appendChild(section);
    section.appendChild(dImage);
    section.appendChild(dName);
    section.appendChild(dPhone);
    section.appendChild(dAddress);
    section.appendChild(dPhone);
    section.appendChild(dEmail);
    section.appendChild(dServices);
    section.appendChild(dClosureSch);

}


// "name": "Apia Samoa Temple",
//             "address": "Vaitele Street\nPesega\nApia, Samoa",
//             "phoneNumber": "(685) 64-230",
//             "email": "",
//             "services": "No clothing rental available\nNo cafeteria available\nNo patron housing available\nDistribution center nearby",
//             "history": "15 October 1977 - Announced\n19 February 1981 - Groundbreaking\n5 August 1983 - Dedicated\n4 September 2005 - Rededicated",
//             "imgFile": "images/apia-temple.jpg",
//             "ordinanceSch": "",
//             "sessionSch": "",
//             "closureSch