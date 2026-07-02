/* =========================
   SMOOTH SCROLL (FIXED)
========================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

/* =========================
   MOBILE MENU
========================= */

const nav = document.querySelector("nav");

const menuBtn = document.createElement("div");
menuBtn.innerHTML = "☰";
menuBtn.classList.add("menu-btn");

document.querySelector(".nav").appendChild(menuBtn);

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});

/* =========================
   SCROLL REVEAL (UPGRADED)
========================= */

const revealElements = document.querySelectorAll(
    ".service-card, .case-card, .testimonial-card, .feature, .numbers div"
);

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.15 });

revealElements.forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});

/* =========================
   SCROLL TO TOP BUTTON
========================= */

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

Object.assign(topBtn.style, {
    position: "fixed",
    bottom: "30px",
    right: "30px",
    width: "55px",
    height: "55px",
    border: "none",
    borderRadius: "50%",
    background: "#3B82F6",
    color: "#fff",
    fontSize: "20px",
    fontWeight: "700",
    cursor: "pointer",
    display: "none",
    zIndex: "9999"
});

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 400 ? "block" : "none";
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

/* =========================
   HEADER SHADOW (MODERN)
========================= */

window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (!header) return;

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";
        header.style.backdropFilter = "blur(15px)";
    } else {
        header.style.boxShadow = "none";
    }
});
