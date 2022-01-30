document.querySelector('#lastMod').textContent = `Last Updated: ${document.lastModified}`;

var today = new Date();
document.querySelector('#currentYear').textContent = `${today.getFullYear()}`;

const fullDate = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(today);
document.querySelector('#today').textContent = ` Today is ${fullDate}`;
