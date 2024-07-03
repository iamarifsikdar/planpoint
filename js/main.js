const navToggle = document.querySelector(".mobile-nav-toggle");
const headerNav = document.querySelector(".header__nav");

navToggle.addEventListener("click", () => {
    headerNav.hasAttribute("data-visible")
        ? navToggle.setAttribute("aria-expanded", false)
        : navToggle.setAttribute("aria-expanded", true);
    headerNav.toggleAttribute("data-visible");
});

const exampleToggle = document.getElementById("examples");
const exampleList = document.getElementById("examples-list");
const exampleDropdown = document.querySelector(".example-dropdown");
const languageDropdown = document.querySelector(".language-dropdown");

exampleToggle.addEventListener("click", () => {
    exampleList.toggleAttribute("data-visible");
    if (!exampleList.hasAttribute("data-visible")) {
        exampleToggle.setAttribute("aria-expanded", false);
        exampleDropdown.innerHTML = "&#x25BC;";
    } else {
        exampleToggle.setAttribute("aria-expanded", true);
        exampleDropdown.innerHTML = "&#x25B2;";
    }
});

const languageToggle = document.getElementById("language");
const languageList = document.getElementById("language-list");

languageToggle.addEventListener("click", () => {
    languageList.toggleAttribute("data-visible");
    if (!languageList.hasAttribute("data-visible")) {
        languageToggle.setAttribute("aria-expanded", false);
        languageDropdown.innerHTML = "&#x25BC;";
    } else {
        languageToggle.setAttribute("aria-expanded", true);
        languageDropdown.innerHTML = "&#x25B2;";
    }
});
