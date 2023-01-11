// initialize animate on scroll
AOS.init();

// querySelectors
const hamBurger=document.querySelector(".hamburger");
const crossBtn=document.querySelector(".cross-btn");
const responsiveNav=document.querySelector(".responsive-nav");
const topBtn=document.querySelector(".top-btn");

// variables
const navElems=Array.from(responsiveNav.children);

// functions
const displayResponsiveNav=()=>{
    responsiveNav.className="responsive-nav activee";
}
const hideResponsiveNav=()=>{
    responsiveNav.className="responsive-nav";
}

// eventListeners
hamBurger.addEventListener("click",displayResponsiveNav);
navElems.forEach(elem=>{
    elem.addEventListener("click",hideResponsiveNav)
})

window.addEventListener("scroll", () => {
    if (window.scrollY <= 550) topBtn.style.display = "none";
    else topBtn.style.display = "block";
  });