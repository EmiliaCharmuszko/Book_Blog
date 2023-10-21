const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');

// Buttons
const prevButton = document.createElement('button');
prevButton.textContent = 'Prev';
prevButton.classList.add('prev-btn');
const nextButton = document.createElement('button');
nextButton.textContent = 'Next';
nextButton.classList.add('next-btn');

// Counter
let counter = 1;
const size = images[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// Button functionality
nextButton.addEventListener('click', () => {
    if (counter >= images.length - 1) return;
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevButton.addEventListener('click', () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

// Append buttons to the carousel
document.body.appendChild(prevButton);
document.body.appendChild(nextButton);