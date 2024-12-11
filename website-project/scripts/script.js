const currentYear = new Date().getFullYear();

document.getElementById('current-year').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('last-modified').textContent = lastModified;

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu ul');

    hamburger.addEventListener('click', () => {
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });
});