let menuBtn = document.querySelector("nav .hamburger-btn");
let navLinks = document.querySelector("nav .links");
let navbar = document.querySelector("nav");
let main = document.querySelector("main");
let hero = document.querySelector("section.hero-section");
menuBtn.onclick = (e) => {
  e.target.classList.toggle("open")
  navLinks.classList.toggle("open")
  document.querySelector("body").classList.toggle("no-scroll")
};

// IntersectionObserver for the main content add navbar scrolling background
const mainContentObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navbar.classList.add("scrolling");
      }
    });
  },
  {
    threshold: 0.5,
  }
);
mainContentObserver.observe(main);

// IntersectionObserver for the hero section to remove navbar scrolling background
const heroObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navbar.classList.remove("scrolling");
      }
    });
  },
  { threshold: 0.75, rootMargin: "0px 0px 0px 0px" }
);
heroObserver.observe(hero);
