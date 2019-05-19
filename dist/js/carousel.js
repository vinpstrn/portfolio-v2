const list = document.querySelector('.carousel__list');
const slides = Array.from(list.children);
const next = document.querySelector('.carousel__btn--right');
const prev = document.querySelector('.carousel__btn--left');
const dotsNav = document.querySelector('.carousel__dots');
const dots = Array.from(dotsNav.children);
const car = document.querySelector('.carousel');
const modalBtn = document.querySelector('.modal-btn');
const closeBtn = document.querySelector('.carousel__close');

const slideWidth= slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePosition);

// MODAL
modalBtn.addEventListener('click', (e) => {
    car.style.width = '100%';
    car.style.opacity = '1';
    car.style.pointerEvents = 'auto';
    car.style.transition = 'all .25s';
});

closeBtn.addEventListener('click', (e) => {
    car.style.width = '0';
    car.style.opacity = '0';
    car.style.pointerEvents = 'none';
});

// Move slide 
const moveToSlide = (list, currentSlide, targetSlide) => {
    list.style.transform = `translateX(-${targetSlide.style.left})`; 
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

// Update dots
const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

// Hide show buttons
const hideShowArrows = (slides,prev, next, targetIndex) => {
    if(targetIndex === 0) {
        prev.classList.add('hidden');
        next.classList.remove('hidden');
    } else if(targetIndex === slides.length - 1){
        prev.classList.remove('hidden');
        next.classList.add('hidden');
    } else {
        prev.classList.remove('hidden');
        next.classList.remove('hidden');
    }
}

// Previous slide
prev.addEventListener('click', (e) => {
    const currentSlide = list.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);

    // Call moveToSlide 
    moveToSlide(list, currentSlide, prevSlide);

    // Call update dots
    updateDots(currentDot,prevDot);

    // Call hide show arrows
    hideShowArrows(slides,prev,next,prevIndex);

});

// Next slide
next.addEventListener('click', (e) => {
    const currentSlide = list.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);

    // Call moveToSlide
    moveToSlide(list, currentSlide, nextSlide);

    // Call update dots
    updateDots(currentDot,nextDot);

    // Call hide show arrows
    hideShowArrows(slides,prev,next,nextIndex);

});

dotsNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');

    if(!targetDot) return;

    const currentSlide = list.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(list, currentSlide, targetSlide);

    updateDots(currentDot,targetDot);

    hideShowArrows(slides,prev,next,targetIndex);

});