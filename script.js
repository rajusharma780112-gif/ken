// ==========================
// SMOOTH SCROLL
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({
behavior:"smooth"
});

}

});

});


// ==========================
// HEADER SHADOW
// ==========================

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>40){

header.style.boxShadow="0 12px 35px rgba(0,0,0,.35)";

}else{

header.style.boxShadow="none";

}

});


// ==========================
// SCROLL ANIMATION
// ==========================

const animatedItems=document.querySelectorAll(

".service-card,.case-card,.testimonial-card,.contact-card"

);

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{
threshold:.15
});

animatedItems.forEach(item=>{

item.style.opacity="0";
item.style.transform="translateY(40px)";
item.style.transition="all .7s ease";

observer.observe(item);

});


// ==========================
// WHATSAPP BUTTON
// ==========================

const whatsapp=document.querySelector(".whatsapp-float");

if(whatsapp){

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

whatsapp.style.opacity="1";
whatsapp.style.transform="scale(1)";

}else{

whatsapp.style.opacity=".85";
whatsapp.style.transform="scale(.92)";

}

});

}


// ==========================
// ACTIVE NAVIGATION
// ==========================

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop;

if(window.scrollY>=top-200){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


// ==========================
// MOBILE MENU
// ==========================

const menuToggle=document.querySelector(".menu-toggle");
const mobileMenu=document.querySelector(".mobile-menu");
const menuOverlay=document.querySelector(".menu-overlay");

if(menuToggle){

menuToggle.addEventListener("click",()=>{

mobileMenu.classList.add("active");
menuOverlay.classList.add("active");

});

}

if(menuOverlay){

menuOverlay.addEventListener("click",()=>{

mobileMenu.classList.remove("active");
menuOverlay.classList.remove("active");

});

}

document.querySelectorAll(".mobile-menu a").forEach(link=>{

link.addEventListener("click",()=>{

mobileMenu.classList.remove("active");
menuOverlay.classList.remove("active");

});

});
const mobileClose=document.querySelector(".mobile-close");

if(mobileClose){

mobileClose.addEventListener("click",()=>{

mobileMenu.classList.remove("active");
menuOverlay.classList.remove("active");

});

}

// ==========================
// PORTFOLIO FILTERS
// ==========================

const viewAllPill = document.querySelector('.filter-pill[data-filter="all"]');
const industryToggle = document.getElementById('industry-toggle');
const industryMenu = document.getElementById('industry-menu');
const industryLabel = document.getElementById('industry-label');
const portfolioCards = document.querySelectorAll('.portfolio-card');

if (portfolioCards.length) {

  const applyFilter = (value, label) => {
    portfolioCards.forEach(card => {
      const matches = value === 'all' || card.dataset.industry === value;
      card.classList.toggle('is-hidden', !matches);
    });
    if (viewAllPill) viewAllPill.classList.toggle('active', value === 'all');
    if (industryLabel) industryLabel.textContent = value === 'all' ? 'Industries' : label;
  };

  if (viewAllPill) {
    viewAllPill.addEventListener('click', () => {
      applyFilter('all', 'Industries');
      if (industryMenu) {
        industryMenu.querySelectorAll('li').forEach(li => li.classList.toggle('active', li.dataset.value === 'all'));
      }
    });
  }

  if (industryToggle && industryMenu) {
    industryToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = industryMenu.classList.toggle('is-open');
      industryToggle.setAttribute('aria-expanded', String(isOpen));
    });

    industryMenu.querySelectorAll('li').forEach(item => {
      item.addEventListener('click', () => {
        industryMenu.querySelectorAll('li').forEach(li => li.classList.remove('active'));
        item.classList.add('active');
        applyFilter(item.dataset.value, item.textContent);
        industryMenu.classList.remove('is-open');
        industryToggle.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', (e) => {
      if (!industryToggle.contains(e.target) && !industryMenu.contains(e.target)) {
        industryMenu.classList.remove('is-open');
        industryToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
}

