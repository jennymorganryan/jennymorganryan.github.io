
document.addEventListener("DOMContentLoaded", function () {
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

    const glam = document.querySelector(".glam");
    const aboutBody = document.getElementById("about-body");
    const aboutHeader = document.getElementById("about-heading");
    const projectHeader = document.getElementById("project-header");
    const line = document.getElementById("line");

    function handleScroll() {
        const elements = [glam, aboutBody, aboutHeader, projectHeader, line];

        elements.forEach(element => {
            if (element) {
                const elementRect = element.getBoundingClientRect();
                const elementTop = elementRect.top;
                const elementBottom = elementRect.bottom;
                const windowHeight = window.innerHeight;

                if (elementTop < windowHeight && elementBottom >= 0) {
                    element.style.opacity = 1;
                } else {
                    element.style.opacity = 0;
                }
            }
        });
    }

    window.addEventListener("scroll", handleScroll);

    $(document).ready(function () {
        // Store the previous scroll position
        let prevScrollPos = $(window).scrollTop();
    
        $(window).scroll(function () {
            let currentScrollPos = $(window).scrollTop();
    if (window.innerWidth >= 1021){   //checks if we have a full screen
       // Check if the current scroll position is less than the previous one (scrolling up)
       if (currentScrollPos < prevScrollPos) {
        $('.menu').show();
    } else {
        $('.menu').hide();
    }

    // Update the previous scroll position
    prevScrollPos = currentScrollPos;
    }
     
        });
    });
});

// Disable context menu
window.oncontextmenu = function (event) {
  event.preventDefault()
  event.stopPropagation()
  return false
}

// Variables
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let imgs = document.querySelectorAll('.carousel-img');
let dots = document.querySelectorAll('.dot');
let captions = document.querySelectorAll('.carousel-caption')
let totalImgs = imgs.length;
let imgPosition = 0;

// Event Listeners
next.addEventListener('click', nextImg);
prev.addEventListener('click', prevImg);

// Update Position
function updatePosition (){
//   Images
  for(let img of imgs){
    img.classList.remove('visible');
    img.classList.add('hidden');
  }
  imgs[imgPosition].classList.remove('hidden');
  imgs[imgPosition].classList.add('visible')
//   Dots
  for (let dot of dots) {
     dot.className = dot.className.replace(" active", "");
  }
    dots[imgPosition].classList.add('active');
//   Captions
  for (let caption of captions) {
      caption.classList.remove('visible');
      caption.classList.add('hidden');
  }
    captions[imgPosition].classList.remove('hidden');
    captions[imgPosition].classList.add('visible')
}

// Next Img
function nextImg(){
  if (imgPosition === totalImgs -1){
        imgPosition = 0;
    } else{
        imgPosition++;
    }
    updatePosition();
}
//Previous Image
function prevImg(){
  if (imgPosition === 0){
        imgPosition = totalImgs-1;
    } else{
        imgPosition--;
    }
    updatePosition();
}

// Dot Position
dots.forEach((dot, dotPosition) => {
  dot.addEventListener("click", () => {
    imgPosition = dotPosition
    updatePosition(dotPosition)
  })
})