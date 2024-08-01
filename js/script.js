/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the blur-header class to the header tag
  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);

/*===== OPTION =====*/
// Get all dropdowns from the document
const dropdowns = document.querySelectorAll(".dropdown");

// Loop through all dropdown elements
dropdowns.forEach((dropdown) => {
  // Get inner elements from each dropdown
  const select = dropdown.querySelector(".select");
  const caret = dropdown.querySelector(".caret");
  const menu = dropdown.querySelector(".menu");
  const options = dropdown.querySelectorAll(".menu li");
  const selected = dropdown.querySelector(".selected");

  // Add a click event to the select element
  select.addEventListener("click", () => {
    // Add the clicked select styles to the select element
    select.classList.toggle("select-clicked");
    // Add the rotate styles to the caret element
    caret.classList.toggle("caret-rotate");
    // Add the open styles to the menu element
    menu.classList.toggle("menu-open");
  });

  // Loop through all option elements
  options.forEach((option) => {
    // Add a click event to the option element
    option.addEventListener("click", () => {
      // Change selected inner text to clicked option inner text
      selected.innerText = option.innerText;
      // Add the clicked select styles to the select element
      select.classList.remove("select-clicked");
      // Add the rotate styles to the caret element
      caret.classList.remove("caret-rotate");
      // Add the open styles to the menu element
      menu.classList.remove("menu-open");
      // Remove active class from all option elements
      options.forEach((option) => {
        option.classList.remove("active");
      });
      // Add active class to clicked option element
      option.classList.add("active");
    });
  });
});

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 3000,
  delay: 400,
  // reset: true // Animations repeat
});

sr.reveal(".home__data, .footer__container");
sr.reveal(".home__card", { delay: 600, distance: "100px", interval: 100 });
sr.reveal(".section__title, .package__card", { interval: 200 });
sr.reveal(".contact__image", { origin: "right" });
sr.reveal(".contact__data", { origin: "left" });
