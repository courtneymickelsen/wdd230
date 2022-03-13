let currentTimestamp = Date.now();

const dateDisplay = document.querySelector(".time-stamp");
// const visitsDisplay = document.querySelector(".visit-count");

let numVisits = Number(window.localStorage.getItem("visits-ls"));
let pastTimestamp = Number(window.localStorage.getItem("timestamp-ls"));

if (numVisits == 0) {
    dateDisplay.textContent = `This is your first time here!`;
	// visitsDisplay.textContent = `This is your first visit!`;
} 
else {
    let difference = currentTimestamp - pastTimestamp;
    let daysSinceVisit = Math.floor(difference/1000/60/60/24);
    dateDisplay.textContent = daysSinceVisit;
	// visitsDisplay.textContent = numVisits;
}

numVisits++;

// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);
localStorage.setItem("timestamp-ls", currentTimestamp);