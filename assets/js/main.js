// main.js (Inspired by StudioPlant interactions)

// 1. Mobile hamburger menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

// 2. Scroll fade-in animation (optional)
// Elements with class .fade-in will appear once scrolled into view
const fadeElements = document.querySelectorAll('.fade-in');

function handleScrollFade() {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      // Add a .show class to trigger CSS transition
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', handleScrollFade);
window.addEventListener('load', handleScrollFade); // On page load, run once

// 3. Simulate story form submission
const storyForm = document.getElementById("story-form");
const submissionMessage = document.getElementById("submission-message");

if (storyForm && submissionMessage) {
  storyForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent actual page reload
    submissionMessage.style.display = "block";
    storyForm.reset();
  });
}

// 4. Simulate contact form submission
const contactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById("contact-message");

if (contactForm && contactMessage) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    contactMessage.style.display = "block";
    contactForm.reset();
  });
}

