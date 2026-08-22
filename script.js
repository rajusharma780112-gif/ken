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

const filterPills = document.querySelectorAll('.filter-pill');
const portfolioCards = document.querySelectorAll('.portfolio-card');

if (filterPills.length && portfolioCards.length) {
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const filter = pill.dataset.filter;
      portfolioCards.forEach(card => {
        const matches = filter === 'all' || card.dataset.industry === filter;
        card.classList.toggle('is-hidden', !matches);
      });
    });
  });
}

