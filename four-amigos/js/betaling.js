'use strict'
/* Scroll-funktion for oversigt-boksen */
document.addEventListener('scroll', function() {
    let div = document.querySelector('.oversigt');
    let stopPosition = 600;
    let scrollY = window.scrollY;

    if (scrollY >= stopPosition) {
        div.classList.add('oversigt-stopped');
    } else {
        div.classList.remove('oversigt-stopped');
    }
});

function redirectToBetalNu() {
    window.location.href = "betalnu.html";
}

function redirectToBekraeftelse() {
    window.location.href = "bekraeftelse.html"
}