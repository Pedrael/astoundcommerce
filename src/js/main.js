let wContent = document.querySelector('.share-content');
let showButton = document.querySelector('.js-open');
let closeButton = document.querySelector('.js-close');
import Swiper from 'swiper/bundle';

document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper(".swiper-container", {
        direction: 'vertical',
        slidesPerView: 1,
        slideClass: "swiper-slide",
        autoplay: true,
        loop: true
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