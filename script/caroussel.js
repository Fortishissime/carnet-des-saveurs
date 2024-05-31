// script.js


/*

let slideIndex = 0;
let slides = document.getElementsByClassName("caroussel-slide");
let currentSlide = 0;
let nextSlide = 1;

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[currentSlide].style.display = "block";
  slides[nextSlide].style.display = "block";
  slides[currentSlide].style.transform = "translateX(0)";
  slides[nextSlide].style.transform = "translateX(100%)";

  setTimeout(() => {
    slides[currentSlide].style.transform = "translateX(-100%)";
    slides[nextSlide].style.transform = "translateX(0%)";
    currentSlide = nextSlide;
    nextSlide = (nextSlide + 1) % slides.length;
    setTimeout(plusSlides(1), 5000);
  }, 1000);
}

showSlides(); // Initialize the carousel

function plusSlides(n) {
  currentSlide = (currentSlide + n + slides.length) % slides.length;
  nextSlide = (currentSlide + 1) % slides.length;
  showSlides();
} */

// carousel.js

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');

    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        
        // Reset opacity of all descriptions
        document.querySelectorAll('.image-description').forEach(desc => {
            desc.style.opacity = 0;
        });
        
        // Show description of current slide with transition
        slides[index].querySelector('.image-description').style.opacity = 1;
    };
    

    const nextSlide = () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    };

    const prevSlide = () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    };

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);


    
    // Optionally, you can add automatic slide change
    setInterval(nextSlide, 5000); // Change slide every 5 seconds
});