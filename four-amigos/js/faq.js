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

/* Så svaret på spørgsmålene kommer frem når man klikker på spørgsmålene */
function toggleParagraph(element) {
    var nextElement = element.nextElementSibling;{
        if (nextElement.classList.contains('hidden')) {
            nextElement.classList.remove('hidden');
        } else {
            nextElement.classList.add('hidden');
        }
    }
}

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