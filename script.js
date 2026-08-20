function toggleMenu() {
    const menu = document.getElementById("mobileMenu");

    menu.classList.toggle("active");
}

function closeMenu() {
    const menu = document.getElementById("mobileMenu");

    menu.classList.remove("active");
}


// Close mobile menu when clicking outside
document.addEventListener("click", function (event) {

    const menu = document.getElementById("mobileMenu");
    const button = document.querySelector(".menu-button");

    if (
        menu.classList.contains("active") &&
        !menu.contains(event.target) &&
        !button.contains(event.target)
    ) {
        menu.classList.remove("active");
    }

});


// Add a small shadow to header while scrolling
window.addEventListener("scroll", function () {

    const header = document.querySelector(".header");

    if (window.scrollY > 20) {
        header.style.boxShadow = "0 5px 25px rgba(44, 33, 26, 0.08)";
    } else {
        header.style.boxShadow = "none";
    }

});
