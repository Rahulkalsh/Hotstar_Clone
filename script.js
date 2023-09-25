document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".carousel-slide");
    const radioButtons = document.querySelectorAll(".carousel-radio");

    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${100 * (i - index)}%)`;
        });
    }

    radioButtons.forEach((radio, i) => {
        radio.addEventListener("change", () => {
            currentIndex = i;
            showSlide(currentIndex);
        });
    });

    showSlide(currentIndex);
});


// vedio card
const videoCards = [...document.querySelectorAll('.video-card')];
videoCards.forEach(item => {
    item.addEventListener('mouseover', () => {
        let video = item.children[1];
        video.play();
    });
    item.addEventListener('mouseleave', () => {
        let video = item.children[1];
        video.pause();
    });
});

//card sliders
let cardContainers = [...document.querySelectorAll('.card-container')];
let preBtns = [...document.querySelectorAll('.pre-btn')];
let nxtBtns = [...document.querySelectorAll('.nxt-btn')];

cardContainers.forEach((items, i) => {
    let containerDimensions = items.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener("click", () => {
        items.scrollLeft += containerWidth - 200;
    });

    preBtns[i].addEventListener("click", () => {
        items.scrollLeft -= containerWidth + 200;
    });

});