document.querySelector('#lastMod').textContent = `Last Updated: ${document.lastModified}`;

let today = new Date();
document.querySelector('#currentYear').textContent = `${today.getFullYear()}`;

const fullDate = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(today);
document.querySelector('#today').textContent = `${fullDate}`;

let weekday = today.getDay();
const banner = document.querySelector('.meet-banner');

if (weekday == 1) {
    showBanner();
}
else if (weekday == 2) {
    showBanner();
}

function showBanner() {
    banner.style.display = "block";
}

dateInput = document.querySelector('#date-input');
dateInput.value = today;
