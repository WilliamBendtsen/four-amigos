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

/* Så knapperne redirecter til deres henholdsvise sider */
function redirectToWolt() {
    window.location.href = "https://wolt.com/da/dnk/aarhus/restaurant/four-amigos";
}

function redirectToAfhentning() {
    window.location.href = "afhentning.html"
}

/* Så illustrationerne til henholdsvis Wolt of Afhentning bliver vist, 
når man hover hen over knapperne */
const woltBtn = document.getElementById("wolt");
const woltImg = document.getElementById("wolt-billede");

const afhentningBtn = document.getElementById("afhentning");
const afhentningImg = document.getElementById("afhentning-billede")

function showWoltImg () {
    woltImg.style.display = "block";
}

function hideWoltImg () {
    woltImg.style.display = "none";
    resetGif(woltImg);
}

function showAfhentningImg() {
    afhentningImg.style.display = "block";
}

function hideAfhentningImg() {
    afhentningImg.style.display = "none";
    resetGif(afhentningImg);
}

woltBtn.addEventListener("mouseover", () => showWoltImg());
woltBtn.addEventListener("mouseout", () => hideWoltImg ());

afhentningBtn.addEventListener("mouseover", () => showAfhentningImg());
afhentningBtn.addEventListener("mouseout", () => hideAfhentningImg());

/* Funktion for at få GIF'en til at genstarte */
function resetGif(imgElement) {
    const src = imgElement.src;
    imgElement.src = "";
    imgElement.src = src;
}
