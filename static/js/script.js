let menuBtn = document.querySelector("nav .hamburger-btn")
let navLinks = document.querySelector("nav .links")
let navbar = document.querySelector("nav")
let main = document.querySelector("main")
let hero = document.querySelector("section.hero-section")
menuBtn.onclick = (e) => {
  e.target.classList.toggle("open")
  navLinks.classList.toggle("open")
  document.querySelector("body").classList.toggle("no-scroll")
}

window.addEventListener('scroll', function() {
  // Check if the user has scrolling 100px or more from the top of the page
  if (window.scrollY >= 300) {
    // Add the "scrolling" class to the navigation element
    navbar.classList.add('scrolling')
  } else {
    // Remove the "scrolling" class from the navigation element
    navbar.classList.remove('scrolling')
  }
})