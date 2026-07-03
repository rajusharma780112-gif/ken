// ==========================
// SMOOTH SCROLL (FIXED)
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
e.preventDefault();

const target = document.querySelector(this.getAttribute('href'));

if (target) {
target.scrollIntoView({
behavior: 'smooth'
});
}

});
});


// ==========================
// HEADER SHADOW ON SCROLL
// ==========================

window.addEventListener("scroll", () => {

const header = document.querySelector("header");

if (window.scrollY > 50) {
header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.4)";
} else {
header.style.boxShadow = "none";
}

});


// ==========================
// FADE IN ANIMATION (SCROLL)
// ==========================

const elements = document.querySelectorAll(
".service-card, .case-card, .testimonial-card, .contact-card"
);

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if (entry.isIntersecting) {
entry.target.style.opacity = 1;
entry.target.style.transform = "translateY(0)";
}

});

}, {
threshold: 0.15
});

elements.forEach(el => {

el.style.opacity = 0;
el.style.transform = "translateY(40px)";
el.style.transition = "all 0.6s ease";

observer.observe(el);

});


// ==========================
// WHATSAPP FLOAT BEHAVIOR
// ==========================

const waButton = document.querySelector(".whatsapp-float");

if (waButton) {

window.addEventListener("scroll", () => {

if (window.scrollY > 300) {
waButton.style.transform = "scale(1)";
waButton.style.opacity = "1";
} else {
waButton.style.transform = "scale(0.9)";
waButton.style.opacity = "0.8";
}

});

}


// ==========================
// ACTIVE NAV LINK HIGHLIGHT
// ==========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop;

if (window.scrollY >= sectionTop - 200) {
current = section.getAttribute("id");
}

});

navLinks.forEach(link => {

link.classList.remove("active");

if (link.getAttribute("href") === "#" + current) {
link.classList.add("active");
}

});

});
