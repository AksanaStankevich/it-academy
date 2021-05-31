const DELAY = 7000; // Delay for the slider
let slideTimeOut; // Stores the interval object
slideIndex = 0; // Stores the current slide number

window.addEventListener('load', event => {
    // Run the slider
    showSlides(slideIndex);
    slideTimeOut = setInterval(autoSlider, DELAY);

    // Keep ony first three tours
    let tours = [...document.getElementsByClassName('tours-item')];
    let toursToHide = tours.slice(3);
    for(let i = 0; i < toursToHide.length; i++) {
        toursToHide[i].style.display = 'none';
    }
})

function plusSlide() {
    clearInterval(slideTimeOut);
    showSlides(slideIndex += 1);
    slideTimeOut = setInterval(autoSlider, DELAY);
}

function minusSlide() {
    clearInterval(slideTimeOut);
    showSlides(slideIndex -= 1);
    slideTimeOut = setInterval(autoSlider, DELAY);
}

function currentSlide(n) {
    clearInterval(slideTimeOut);
    showSlides(slideIndex = n);
    slideTimeOut = setInterval(autoSlider, DELAY);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("item");
    let dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function autoSlider() {
    slideIndex++;
    showSlides(slideIndex);
}

function showAllTours() {
    let tours = document.getElementsByClassName('tours-item');
    for(let i = 0; i < tours.length; i++) {
        tours[i].style.display = 'flex';
    }

    document.getElementById('more-tours').style.display = 'none';
}