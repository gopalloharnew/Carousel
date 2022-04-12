const carouselSlides = [...document.querySelectorAll(".carousel-slide")];
const carouselButtons = [...document.querySelectorAll("[data-carousel-button]")];
const carouselBox = document.querySelector(".carousel-box");
const carouselButtonsPrev = document.querySelector(`[data-carousel-button="prev"]`);
const carouselButtonsNext = document.querySelector(`[data-carousel-button="next"]`);
const carouselIndicator = document.querySelector(".carousel-indicator");
let currentSlide = 2;

const setSlidePosition = (slide, index) => {
    slide.style.transform = `translateX(${(index - currentSlide) * 100}%)`;
}

const setCarouselButtons = () => {
    let noOfSlides = carouselSlides.length;
    carouselButtonsPrev.classList.toggle('hide', currentSlide === 0 || noOfSlides < 2);
    carouselButtonsNext.classList.toggle('hide', currentSlide === noOfSlides - 1 || noOfSlides < 2);
}

const setCarouselIndicator = () => {
    carouselIndicator.innerHTML = "";
    for (let i = 0; i < carouselSlides.length; i++) {
        let li = document.createElement('li');
        li.classList.toggle("active-carousel-indicator", i === currentSlide);
        let button = document.createElement('button');
        button.addEventListener('click', ()=>{
            currentSlide = i;
            carousel();
        })
        li.append(button);
        carouselIndicator.append(li);
    }
}

const carousel = () => {
    setCarouselButtons();
    carouselSlides.forEach(setSlidePosition);
    setCarouselIndicator();
}

carousel();

carouselButtonsNext.addEventListener('click', () => {
    currentSlide++;
    carousel();
});

carouselButtonsPrev.addEventListener('click', () => {
    currentSlide--;
    carousel();
});

carouselBox.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "ArrowRight":
            if(currentSlide < carouselSlides.length - 1){
                currentSlide++;
                carousel();
            }
            break;
        case "ArrowLeft":
            if(currentSlide > 0){
                currentSlide--;
                carousel();
            }
            break;
    }
})
