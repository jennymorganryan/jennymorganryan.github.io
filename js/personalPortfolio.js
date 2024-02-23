const clickableBar = document.querySelector('#clickable-bar');
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navbarLinks = document.querySelectorAll('.navbar__links');


clickableBar.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// Close menu and links on navbar__links click
navbarLinks.forEach(link => {
    link.addEventListener('click', function() {
        menu.classList.remove('is-active');
        menuLinks.classList.remove('active');
    });
});