const slides = document.querySelector(".slides");
const slideImages = document.querySelectorAll(".slides img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let counter = 1;
const size = slideImages[0].clientWidth;

slides.style.transform = `translateX(${-size * counter}px)`;

nextBtn.addEventListener("click", () => {
  if (counter >= slideImages.length - 1) return;
  slides.style.transition = "transform 0.5s ease-in-out";
  counter++;
  slides.style.transform = `translateX(${-size * counter}px)`;
});

prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  slides.style.transition = "transform 0.5s ease-in-out";
  counter--;
  slides.style.transform = `translateX(${-size * counter}px)`;
});

slides.addEventListener("transitionend", () => {
  if (slideImages[counter].id === "lastClone") {
    slides.style.transition = "none";
    counter = slideImages.length - 2;
    slides.style.transform = `translateX(${-size * counter}px)`;
  }
  if (slideImages[counter].id === "firstClone") {
    slides.style.transition = "none";
    counter = slideImages.length - counter;
    slides.style.transform = `translateX(${-size * counter}px)`;
  }
});
