// let spotlight1 = document.querySelector('.spotlight1');
// let spotlight2 = document.querySelector('.spotlight2');
// let spotlight3 = document.querySelector('.spotlight3');
const requestURL = "https://courtneymickelsen.github.io/wdd230/chamber/json/data.json";

fetch(requestURL)
.then(function (response) {
    return response.json();
})
.then(createContent);


// spotlights.forEach(createContent(companies));

function createContent(jsonObject) {
    
    let spotlight1 = document.querySelector('.spotlight1');
    let spotlight2 = document.querySelector('.spotlight2');
    let spotlight3 = document.querySelector('.spotlight3');
    
    const spotlights = [spotlight1, spotlight2, spotlight3];
    const randomNumbers = [];

    while (randomNumbers.length < 3) {
        let number = Math.ceil(Math.random() * 12);
        if (!(randomNumbers.includes(number))) {
            randomNumbers.push(number);
        }
    };

    const companies = jsonObject.companies;
    console.log(companies);
    
    for (i = 0; i < spotlights.length; i++) {
        let spotlight = spotlights[i]

        randomNumber = randomNumbers[i];

        let h2 = document.createElement('h2');
        let img = document.createElement('img');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let websiteLink = document.createElement('a');
        let website = document.createElement('p');

        let dName = companies[randomNumber].name;
        let imgPath = companies[randomNumber].iconFile;
        let dAddress = companies[randomNumber].address;
        let dPhone = companies[randomNumber].phoneNumber;
        let dWebsite = companies[randomNumber].website;


        h2.textContent = `- ${dName} -`;
        img.setAttribute('src', imgPath);
        img.setAttribute('alt', `${dName} Logo`)
        address.textContent = dAddress;
        phone.textContent = dPhone;
        website.textContent = dWebsite;

        websiteLink.appendChild(website);

        spotlight.appendChild(h2);
        spotlight.appendChild(img);
        spotlight.appendChild(address);
        spotlight.appendChild(phone);
        spotlight.appendChild(websiteLink);

    }
};
