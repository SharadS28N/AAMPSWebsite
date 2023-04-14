const slideshow = document.querySelector('.slideshow');
const slides = slideshow.querySelectorAll('.slideshow-slide');
const prevButton = slideshow.querySelector('.prev-slide');
const nextButton = slideshow.querySelector('.next-slide');
let currentSlide = 0;

// Set the first slide as active
slides[currentSlide].classList.add('active');

// Add event listeners to the previous and next buttons
prevButton.addEventListener('click', showPrevSlide);
nextButton.addEventListener('click', showNextSlide);

// Function to show the previous slide
function showPrevSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

// Function to show the next slide
function showNextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}