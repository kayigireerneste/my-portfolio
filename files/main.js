// JavaScript code to handle active elements in the navigation bar
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', function() {

        navLinks.forEach(link => link.classList.remove('active'));

        this.classList.add('active');
    });
});

//navigation changing height while scrolling
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
});

//To update the active element in the navigation bar 
//based on the current page while scrolling
window.addEventListener('DOMContentLoaded', (event) => {
  const navBar = document.querySelector('.navBar');
  const navLinks = document.querySelectorAll('.navBar li a');
  let prevScrollPos = window.pageYOffset;

  window.addEventListener('scroll', () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos) {
          navBar.classList.remove('hidden');
      } else {
          navBar.classList.add('hidden');
      }

      prevScrollPos = currentScrollPos;

      const sections = document.querySelectorAll('section');
      let currentSectionIndex = 0;

      sections.forEach((section, index) => {
          const sectionTop = section.offsetTop - navBar.offsetHeight;
          if (currentScrollPos >= sectionTop) {
              currentSectionIndex = index;
          }
      });

      navLinks.forEach((link) => {
          link.classList.remove('active');
      });

      navLinks[currentSectionIndex].classList.add('active');
  });
});