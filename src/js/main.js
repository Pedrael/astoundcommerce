let wContent = document.querySelector('.share-content');
let showButton = document.querySelector('.js-open');
let closeButton = document.querySelector('.js-close');
let {Carousel} = require("latte-carousel");

document.addEventListener('DOMContentLoaded', () => {
    const carousel = new Carousel('#carousel', {
        count: 1,
        move: 1,
        touch: true,
        mode: "free",
        buttons: false,
        dots: false,
        rewind: true,
        autoplay: 0,
        animation: 500
    });
});

if(showButton && wContent && closeButton) {
    showButton.addEventListener('click', (e) => {
        if(e.target == showButton) {
            wContent.style.opacity = 1;
            wContent.style.zIndex = 1;
        }
    });

    closeButton.addEventListener('click', (e) => {
        if(e.currentTarget == closeButton) {
            wContent.style.opacity = 0;
            wContent.style.zIndex = -1;
        }
    });
}