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
const slider = document.querySelector('.inner'),
  slides = Array.from(document.querySelectorAll('.slide-content'))

let isDragging = false,
  startPos = 0,
  currentTranslate = 0,
  prevTranslate = 0,
  animationID = 0,
  currentIndex = 0

slides.forEach((slide, index) => {
  const slideImage = slide.querySelector('img')
  slideImage.addEventListener('dragstart', (e) => e.preventDefault())

  // Touch events
  slide.addEventListener('touchstart', touchStart(index))
  slide.addEventListener('touchend', touchEnd)
  slide.addEventListener('touchmove', touchMove)

  // Mouse events
  slide.addEventListener('mousedown', touchStart(index))
  slide.addEventListener('mouseup', touchEnd)
  slide.addEventListener('mouseleave', touchEnd)
  slide.addEventListener('mousemove', touchMove)
})

// Disable context menu
window.oncontextmenu = function (event) {
  event.preventDefault()
  event.stopPropagation()
  return false
}

function touchStart(index) {
  return function (event) {
    currentIndex = index
    startPos = getPositionX(event)
    isDragging = true

    // https://css-tricks.com/using-requestanimationframe/
    animationID = requestAnimationFrame(animation)
    slider.classList.add('grabbing')
  }
}

function touchEnd() {
  isDragging = false
  cancelAnimationFrame(animationID)

  const movedBy = currentTranslate - prevTranslate

  if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1

  if (movedBy > 100 && currentIndex > 0) currentIndex -= 1

  setPositionByIndex()

  slider.classList.remove('grabbing')
}

function touchMove(event) {
  if (isDragging) {
    const currentPosition = getPositionX(event)
    currentTranslate = prevTranslate + currentPosition - startPos
  }
}

function getPositionX(event) {
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
}

function animation() {
  setSliderPosition()
  if (isDragging) requestAnimationFrame(animation)
}

function setSliderPosition() {
  slider.style.transform = `translateX(${currentTranslate}px)`
}

function setPositionByIndex() {
  currentTranslate = currentIndex * -window.innerWidth
  prevTranslate = currentTranslate
  setSliderPosition()
}
