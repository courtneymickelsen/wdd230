const requestURL = "https://courtneymickelsen.github.io/wdd230/chamber/json/data.json";
const directory = document.querySelector('.directory');

fetch(requestURL)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    console.table(jsonObject);
    const companies = jsonObject['companies'];
    companies.forEach(displayCompanies);
});

function displayCompanies(company) {
    let section = document.createElement('section');
    let vLogo = document.createElement('img');
    let vName = document.createElement('h4');
    let vPhone = document.createElement('p');
    let vAddress = document.createElement('p');
    let vWebPar = document.createElement('p');
    let vWebsite = document.createElement('a');
    // let iconFile = section.createChildElement('p');
    
    vLogo.setAttribute('src', company.iconFile);
    vName.textContent = `${company.name}`;
    vPhone.textContent = `${company.phoneNumber}`;
    vAddress.textContent = `${company.address}`;
    vWebsite.setAttribute('href', `${company.website}`)
    vWebPar.textContent = `${company.website}`;

    
    directory.appendChild(section);
    section.appendChild(vLogo);
    section.appendChild(vName);
    section.appendChild(vPhone);
    section.appendChild(vAddress);
    section.appendChild(vWebsite);
    vWebsite.appendChild(vWebPar);
}

function listView() {
    const directory = document.querySelector('.directory');
    directory.classList.replace('card', 'list');
}

function cardView() {
    const directory = document.querySelector('.directory');
    directory.classList.replace('list', 'card');
}