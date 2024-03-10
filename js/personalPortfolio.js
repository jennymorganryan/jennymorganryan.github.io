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

document.addEventListener("DOMContentLoaded", function () {
    const glam = document.querySelector(".glam");
    const aboutBody = document.getElementById("about-body");
    const aboutHeader = document.getElementById("about-heading");
    const projectHeader = document.getElementById("project-header");
    const line = document.getElementById("line");

    window.addEventListener("scroll", function () {
        // Check visibility for .glam
        const glamRect = glam.getBoundingClientRect();
        const glamTop = glamRect.top;
        const glamBottom = glamRect.bottom;
        const windowHeight = window.innerHeight;

        if (glamTop < windowHeight && glamBottom >= 0) {
            glam.style.opacity = 1;
        } else {
            glam.style.opacity = 0;
        }

        // Check visibility for #about-body
        const aboutBodyRect = aboutBody.getBoundingClientRect();
        const aboutBodyTop = aboutBodyRect.top;
        const aboutBodyBottom = aboutBodyRect.bottom;

        if (aboutBodyTop < windowHeight && aboutBodyBottom >= 0) {
            aboutBody.style.opacity = 1;
        } else {
            aboutBody.style.opacity = 0;
        }

        // Check visibility for #about-header
        const aboutHeaderRect = aboutHeader.getBoundingClientRect();
        const aboutHeaderTop = aboutHeaderRect.top;
        const aboutHeaderBottom = aboutHeaderRect.bottom;

        if (aboutHeaderTop < windowHeight && aboutHeaderBottom >= 0) {
            aboutHeader.style.opacity = 1;
        } else {
            aboutHeader.style.opacity = 0;
        }

        // Check visibility for #project-header
        const projectHeaderRect = projectHeader.getBoundingClientRect();
        const projectHeaderTop = projectHeaderRect.top;
        const projectHeaderBottom = projectHeaderRect.bottom;

        if (projectHeaderTop < windowHeight && projectHeaderBottom >= 0) {
            projectHeader.style.opacity = 1;
        } else {
            projectHeader.style.opacity = 0;
        }

        // Check visibility for #line
        const lineRect = line.getBoundingClientRect();
        const lineTop = lineRect.top;
        const lineBottom = lineRect.bottom;

        if (lineTop < windowHeight && lineBottom >= 0) {
            line.style.opacity = 1;
        } else {
            line.style.opacity = 0;
        }
    });
});
