const requestURL = "https://courtneymickelsen.github.io/wdd230/chamber/json/data.json";
const directory = document.querySelector('.directory');

fetch(requestURL)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    console.table(jsonObject);
    const companies = jsonObject['companies'];
    companies.foreach(displayCompanies);
});

function displayCompanies(company) {
    let section = document.createElement('section');
    let logo = document.createElement('img');
    let compName = document.createElement('h4');
    let phone = document.createElement('p');
    let address = document.createElement('p');
    let website = document.createElement('p');
    // let iconFile = section.createChildElement('p');
    
    logo.setAttribute('src', company.icon-file);
    compName.textContent = `${company.name}`;
    
    directory.appendChild(section);
    section.appendChild(logo);
    section.appendChild(compName);
    section.appendChild(phone);
    section.appendChild(address);
    section.appendChild(website);
}