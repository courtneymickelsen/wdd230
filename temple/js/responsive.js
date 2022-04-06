function toggleMenu() {
    const closeButton = document.querySelector('.nav-button');
    closeButton.classList.toggle('invisible');
    const menu = document.querySelector('.menu');
    menu.classList.toggle('responsive');
}

function toggleAlert() {
    const alert = document.querySelector('.weather-alert');
    alert.classList.toggle('invisible');
}

let imagesToLoad = document.querySelectorAll('img[data-src]');

const imgOptions = {
    threshold: 0.1, 
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    }, imgOptions);

    imagesToLoad.forEach((img) => {
        imgObserver.observe(img);
    });
}
else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}

document.querySelector('#lastMod').textContent = `Last Updated: ${document.lastModified}`;
