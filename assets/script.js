// script.js
let slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide() {
  slides[currentSlide].classList.remove('fade-in');
  slides[currentSlide].style.display = 'none';
  
  currentSlide = (currentSlide + 1) % slides.length;
  
  slides[currentSlide].style.display = 'block';
  slides[currentSlide].classList.add('fade-in');
}
slides[currentSlide].style.display = 'block';
slides[currentSlide].classList.add('fade-in');

setInterval(showSlide, 3000);
