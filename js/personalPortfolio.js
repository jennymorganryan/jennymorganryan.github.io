

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
    });
  });

  
  
// Adjust the scrolling speed factor (higher value for slower scrolling)
const scrollSpeed = 0.5;

// Function to handle the scroll event
function handleScroll() {
  // Calculate the amount to scroll based on the scroll speed
  const scrollAmount = window.scrollY * scrollSpeed;

  // Apply the transformation to scroll the entire body
  document.body.style.transform = `translateY(${scrollAmount}px)`;
}

// Add the scroll event listener
window.addEventListener('scroll', handleScroll);


