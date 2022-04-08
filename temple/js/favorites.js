
function checkStorage(likeButton) {
    if ((window.localStorage.getItem(`${likeButton}`)) == 'favorite') {
        likeButton.innerHTML = `☆ Make Favorite`;
    }
}


function addFavorite(likeButton) {
    localStorage.setItem(`${likeButton}`, 'favorite');
};

let likeButtonList = document.querySelectorAll('.like-button');
likeButtonList.forEach(checkStorage);