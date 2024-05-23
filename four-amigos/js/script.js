/* Så logoet redirecter til landing page */
function redirectToIndex() {
    window.location.href = "index.html";
}

/* Så henholdsvis menu- og bestilknappen redirecter til deres givne undersider */
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

/* Funktioner for at henholdsvis gemme og vise dropdown-menuen */
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

/* Mouseover og mouseout effekter på de relevante menupunkter i navbaren, der styrer hvorvidt dropdownmenuen vises eller ej */
meet.addEventListener("mouseover", () => showDropDown1());
dropdown1.addEventListener("mouseover", () => showDropDown1());
dropdown1.addEventListener("mouseout", () => hideDropDown1());

kontakt.addEventListener("mouseover", () => showDropDown2());
dropdown2.addEventListener("mouseover", () => showDropDown2());
dropdown2.addEventListener("mouseout", () => hideDropDown2());

/* Så navbaren er responsive */
const burgerMenu = document.getElementById("burger-menu");
const navbar = document.getElementById("navbar");

burgerMenu.addEventListener("click", () => {
    // Move the dropdown <a> elements to the navbar
    while (dropdown1.firstChild) {
        navbar.appendChild(dropdown1.firstChild);
    }
    while (dropdown2.firstChild) {
        navbar.appendChild(dropdown2.firstChild);
    }
    // Remove the empty dropdown divs
    dropdown1.remove();
    dropdown2.remove();
});