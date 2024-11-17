const currentYear = new Date().getFullYear();

document.getElementById('current-year').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('last-modified').textContent = lastModified;

document.addEventListener("DOMContentLoaded", () => {
    const hamburgerButton = document.getElementById("hamburger-button");
    const navigationMenu = document.getElementById("navigation-menu");

    // Clicking the hamburger button toggles the navigation menu items from viewable to not viewable
    hamburgerButton.addEventListener("click", function() {
        navigationMenu.classList.toggle("active");

        // Use a symbol, such as an 'X' to close the hamburger menu.
        if (navigationMenu.classList.contains("active")) {
            hamburgerButton.textContent = '\u274C';
        } else {
            hamburgerButton.textContent = "☰"; 
        }
    });
});
