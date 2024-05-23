/* Så teksten "fjern" får den tilhørende notifikation til at komme frem, og derefter forsvinde igen, når den er trykket på */
document.addEventListener('DOMContentLoaded', function() {
    let removeButton1 = document.querySelector('.remove-button');
    let removeButton2 = document.querySelector('.fjern');
    let elementsToRemove = document.querySelectorAll('.afhentning-plads, .taco4stk-overskrift, .taco4stk-underskrift, .afhentning-taco, .taco4stk-pris, .betalnu, .remove-button, .fjern');
    let elementsToAdd = document.querySelector('.fjernet')

    removeButton1.addEventListener('click', function() {
        elementsToAdd.classList.add('popup');
        elementsToRemove.forEach(function(element) {
            element.remove();

        });
    });

    removeButton2.addEventListener('click', function() {
        elementsToAdd.classList.add('popup');
        elementsToRemove.forEach(function(element) {
            element.remove();

        });
    });

});

/* Så navbaren er responsive */
const burgerMenu = document.getElementById("burger-menu");
const navbar = document.getElementById("navbar");

burgerMenu.addEventListener("click", () => {
    const meetDropdown = document.getElementById("meet-dropdown");
    const kontaktDropdown = document.getElementById("kontakt-dropdown");
    const navLinks = document.querySelectorAll("#navbar a");

    // Move items from dropdowns to navbar
    while (meetDropdown.firstChild) {
        navbar.appendChild(meetDropdown.firstChild);
    }
    while (kontaktDropdown.firstChild) {
        navbar.appendChild(kontaktDropdown.firstChild);
    }


    navbar.classList.toggle("active");
        // Toggle visibility of all <a> elements inside the navbar
    navLinks.forEach(link => {
        link.classList.toggle("active");
    });

    // Optionally, hide the dropdown divs
    meetDropdown.style.display = 'none';
    kontaktDropdown.style.display = 'none';
});