const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    toggle.addEventListener("click", () => {
        nav.classList.toggle("show-menu");

        toggle.classList.toggle("show-icon");

        if (nav.classList.contains("show-menu")) {
            toggle.setAttribute("aria-expanded", true);

            document.body.style.pointerEvents = "none";
            toggle.style.pointerEvents = "auto";
        } else {
            toggle.setAttribute("aria-expanded", false);

            document.body.style.pointerEvents = "auto";
        }
    });
};

showMenu("nav-toggle", "nav-menu");

const dropdownItems = document.querySelectorAll(".dropdown__item");

dropdownItems.forEach((item) => {
    const dropdownButton = item.querySelector(".dropdown__button");

    dropdownButton.addEventListener("click", () => {
        const showDropdown = document.querySelector(".show-dropdown");

        toggleItem(item);

        if (showDropdown && showDropdown != item) {
            toggleItem(showDropdown);
        }
    });
});

const toggleItem = (item) => {
    const dropdownButton = item.querySelector(".dropdown__button");
    const dropdownContainer = item.querySelector(".dropdown__container");

    if (item.classList.contains("show-dropdown")) {
        dropdownButton.setAttribute("aria-expanded", false);

        dropdownContainer.removeAttribute("style");
        item.classList.remove("show-dropdown");
    } else {
        dropdownButton.setAttribute("aria-expanded", true);

        dropdownContainer.style.height = dropdownContainer.scrollHeight + "px";
        item.classList.add("show-dropdown");
    }
};

const mediaQuery = matchMedia("(min-width: 69.875em)"),
    dropdownContainer = document.querySelectorAll("dropdown__container");

const removeStyle = () => {
    if (mediaQuery.matches) {
        dropdownContainer.forEach((e) => {
            e.removeAttribute("style");
        });

        dropdownItems.forEach((e) => {
            e.classList.remove("show-dropdown");
        });
    }
};

addEventListener("resize", removeStyle);
