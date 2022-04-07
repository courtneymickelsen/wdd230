let currentTimestamp = Date.now();
let likeButtonList = document.querySelectorAll('.like-button');
likeButtonList.forEach(storage());

let isFavorite = Number(window.localStorage.getItem("visits-ls"));
let pastTimestamp = Number(window.localStorage.getItem("timestamp-ls"));

if (numVisits == 0) {
    dateDisplay.textContent = `This is your first time here!`;
} 
else {
    let difference = currentTimestamp - pastTimestamp;
    let daysSinceVisit = Math.floor(difference/1000/60/60/24);
    dateDisplay.textContent = daysSinceVisit;
}

numVisits++;

// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);
localStorage.setItem("timestamp-ls", currentTimestamp);




// likeButton.addEventListener('click', addFavorite());

function addFavorite() {
    likeButton.classList.add('liked');
    localStorage.setItem('favorite', )
};