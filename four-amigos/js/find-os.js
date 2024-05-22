/* Så logoet redirecter til landing page */
function redirectToIndex() {
    window.location.href = "index.html";
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

/* Så billederne til de sociale medier redirecter til de givne sociale medier */
function redirectToTikTok() {
    window.location.href = "https://www.tiktok.com/@four.amigos03"
}

function redirectToInstagram() {
    window.location.href = "https://www.instagram.com/fouramigos_aarhus/"
}