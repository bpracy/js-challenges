const menu = document.querySelector("#mobile-menu");
const headerMenu = document.querySelector(".header-menu");
//Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle("is-active");
  headerMenu.classList.toggle("active");
};
menu.addEventListener("click", mobileMenu);

//highlight menu
//* 1. creer fonction listen sur window scroll
//* 2. find section in view
//* 3. find corresponding menu item then hightlight it

const home = document.querySelector("#home");
const about = document.querySelector("#about");
const contacts = document.querySelector("#contacts");
const elem = document.querySelector(".highlight");
const sections = document.querySelectorAll(".section");
// console.log('sections', sections)

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

const highlightMenu = () => {
  console.log(`on hightlight...`, window.scrollY);
  let scrollPosition = window.scrollY;

  sections.forEach(section => {
    console.log(`in view: ${section.classList}`, isInViewport(section));
  });

  if (window.innerWidth > 800 && scrollPosition < 450) {
    home.classList.add("highlight");
    about.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 800 && scrollPosition < 2000) {
    about.classList.add("highlight");
    home.classList.remove("highlight");
    contacts.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 800 && scrollPosition < 2400) {
    contacts.classList.add("highlight");
    about.classList.remove("highlight");
    return;
    //pourquoi le return?
  }

  if ((elem && window.innerWidth < 800 && scrollPos < 450) || elem) {
    elem.classList.remove("highlight");
  }
};
window.addEventListener("scroll", highlightMenu);
window.addEventListener("click", highlightMenu); //pourquoi le click ne marche pas?
