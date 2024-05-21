function redirectToIndex() {
    window.location.href = "index.html";
}

function redirectToMenu() {
    window.location.href = "menu.html";
}

function redirectToBestil() {
    window.location.href = "bestil.html";
}

/* Dropdown */
const dropdown1 = document.getElementById("meet-dropdown");
const dropdown2 = document.getElementById("kontakt-dropdown");

const meet = document.getElementById("meet-nav");
const kontakt = document.getElementById("kontakt-nav");

dropdown1.style.display = "none";
dropdown2.style.display = "none";

function showDropDown1() {
    dropdown1.style.display = "flex";
}
function showDropDown2() {
    dropdown2.style.display = "flex";
}

function hideDropDown1() {
    dropdown1.style.display = "none";
}
function hideDropDown2() {
    dropdown2.style.display = "none";
}

meet.addEventListener("mouseover", () => showDropDown1());
dropdown1.addEventListener("mouseover", () => showDropDown1());
dropdown1.addEventListener("mouseout", () => hideDropDown1());

kontakt.addEventListener("mouseover", () => showDropDown2());
dropdown2.addEventListener("mouseover", () => showDropDown2());
dropdown2.addEventListener("mouseout", () => hideDropDown2());


const carouselContainer = document.querySelector('.carousel-container');
const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let counter = 0;
const size = images[0].clientWidth;

function updateCarousel() {
    carouselContainer.style.transform = `translateX(${-size * counter}px)`;
}

nextButton.addEventListener('click', () => {
    if (counter >= images.length - 3) {
        counter = -1;
    }
    counter++;
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    if (counter <= 0) {
        counter = images.length - 3;
    }
    counter--;
    updateCarousel();
});

window.addEventListener('resize', () => {
    size = images[0].clientWidth;
    updateCarousel();
});
