let right = function(cards, index) {
    cards[index].style.display = "none";
    cards.length - 1 == index ? index = 0 : index++;
    cards[index].style.display = "flex";
    return index;
}

let left = function(cards, index) {
    cards[index].style.display = "none";
    0 == index ? index = cards.length - 1 : index--;
    cards[index].style.display = "flex";
    return index;
}

document.addEventListener("DOMContentLoaded", () => {

    let wContent = document.querySelector('.share-content');
    let showButton = document.querySelector('.js-open');
    let closeButton = document.querySelector('.js-close');
    let cWrapper = document.querySelector('.carousel');
    let lBtn = document.querySelector('.left-btn');
    let rBtn = document.querySelector('.right-btn');

    if(cWrapper) {
        let cards = cWrapper.querySelectorAll('.card');
        let index = 0;
        if(window.innerWidth < cWrapper.dataset.responsive)
            cards.forEach((card, i) => {
                if(i != index) {
                    card.style.display = "none";
                }
            });
        window.onresize = () => {
            if(window.innerWidth < cWrapper.dataset.responsive)
                cards.forEach((card, i) => {
                    if(i != index) {
                        card.style.display = "none";
                    }
                });
            else cards.forEach((card) => {
                card.style.display = "flex";
            });
        }
        if(lBtn && rBtn) {
            lBtn.addEventListener("click", () => index = left(cards, index));
            rBtn.addEventListener("click", () => index = right(cards, index));
        }
    }

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

});