// Sticky Navbar
let navbar = document.getElementById('nav');

// Back to top button
//Get the button:
mybutton = document.getElementById("myBtn");


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Select element function
const selectElement = function (element) {
  return document.querySelector(element);
};

let menuToggler = selectElement(".menu-toggle");
let body = selectElement("body");

menuToggler.addEventListener("click", function () {
  body.classList.toggle("open");
});

let aboutNav = document.getElementById('about-nav');
let skillsNav = document.getElementById('skills-nav');
let portfolioNav = document.getElementById('portfolio-nav');
let contactNav = document.getElementById('contact-nav');

aboutNav.addEventListener('click', function () {
  body.classList.remove("open");
})

skillsNav.addEventListener('click', function () {
  body.classList.remove("open");
})

portfolioNav.addEventListener('click', function () {
  body.classList.remove("open");
})

contactNav.addEventListener('click', function () {
  body.classList.remove("open");
})

// Scroll Reveal
window.sr = ScrollReveal();

sr.reveal(".animate-left", {
  origin: "left",
  duration: 1000,
  distance: "25rem",
  delay: 300,
});

sr.reveal(".animate-right", {
  origin: "right",
  duration: 1000,
  distance: "25rem",
  delay: 600,
});

sr.reveal(".animate-top", {
  origin: "top",
  duration: 1000,
  distance: "25rem",
  delay: 600,
});

sr.reveal(".animate-bottom", {
  origin: "bottom",
  duration: 1000,
  distance: "25rem",
  delay: 600,
});

// Typed.JS
let typed = new Typed('.animate', {
  strings: [
    "Desenvolvedor Web",
    "Trabalho com Front-End",
    "Trabalho com Back-End",
    "Trabalho com Wordpress",
    "Landing Pages Responsivas",
    "Tecladista ❤️"
  ],
  startDelay: 2000,
  typeSpeed: 60,
  backSpeed: 20,
  backDelay: 1000,
  loop: true,
  smartBackspace: true
});

// Button functions
function openSpotenu() {
  window.open('https://github.com/brunobulgaron/spotenu-frontend', '_blank');
};

function open4eddit() {
  window.open('https://github.com/brunobulgaron/4eddit', '_blank');
};

function openrappi4() {
  window.open('https://github.com/brunobulgaron/rappi4', '_blank');
};

function openGithub() {
  window.open('https://github.com/brunobulgaron', '_blank');
};