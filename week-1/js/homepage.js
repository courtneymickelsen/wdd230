const lastMod = document.querySelector('#lastMod');
lastMod.textContent = `Last Updated: ${document.lastModified}`;

var today = new Date();
document.querySelector('#currentYear').textContent = `${today.getFullYear()}`;