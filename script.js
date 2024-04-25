const menuIcon = document.querySelector('.menu-icon'), 
      header = document.querySelector('header');
    


    menuIcon.addEventListener('click', ()=>{
    menuIcon.classList.toggle('menu-icon--active');
    header.classList.toggle('header--mobile');

    
});

// Slider 1

    const sliderArrows = document.querySelector('.slider-arrows'),
    slidesArrows = sliderArrows.querySelectorAll('.slider-arrows__item'),
    prev = sliderArrows.querySelector('.slider-arrows__arrow--left'),
    next = sliderArrows.querySelector('.slider-arrows__arrow--right');

    console.log(slidesArrows);

let slideIndex = 0;

prev.addEventListener('click',()=> showSlideArrows(-1));
next.addEventListener('click', ()=> showSlideArrows(1));

function showSlideArrows(n){

    // console.log(n);

    slideIndex += n;

    if(slideIndex < 0) {
        slideIndex = slidesArrows.length -1;
    }

    if (slideIndex>=slidesArrows.length) slideIndex = 0;


    console.log(slideIndex);

    slidesArrows.forEach(item => item.style.display = 'none');
    slidesArrows[slideIndex].style.display='block';
}

showSlideArrows(0);

// Slider 2

const sliderDots = document.querySelector('.slider-dots');
const slidesDots = sliderDots.querySelectorAll('.slider-dots__item');
const wrapperDots = sliderDots.querySelector('.slider-dots__nav');
const dots = [];

for (let i = 0; i < slidesDots.length; i++) {
    const dot = document.createElement('button');
    dot.dataset.slideTo = i;
    dot.classList.add('slider-dots__nav-item');
    if (i === 0) {
        dot.classList.add('slider-dots__nav-item--active');
    } else {
        slidesDots[i].style.display = 'none';
    }
    dot.addEventListener('click', showSlideDots);
    wrapperDots.append(dot);
    dots.push(dot);
}

function showSlideDots(e) {
    const slideTo = e.target.dataset.slideTo;
    slidesDots.forEach((item) => (item.style.display = 'none'));
    slidesDots[slideTo].style.display = 'block';
    dots.forEach((dot) => dot.classList.remove('slider-dots__nav-item--active'));
    e.target.classList.add('slider-dots__nav-item--active');
}



