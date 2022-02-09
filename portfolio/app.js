const menu =document.querySelector('#mobile-menu');
const headerMenu = document.querySelector('.header-menu');
//Display Mobile Menu
const mobileMenu=()=>{
    menu.classList.toggle('is-active');
    headerMenu.classList.toggle('active');
}
menu.addEventListener('click',mobileMenu);

//highlight menu
const highlightMenu=() =>{
    let scrollPosition=window.scrollY;
    const home=document.querySelector('#home');
    const about=document.querySelector('#about');
    const contacts=document.querySelector('#contacts');
    const elem =document.querySelector('.highlight');
    

    if(window.innerWidth >800 && scrollPosition <450){
        home.classList.add('highlight');
        about.classList.remove('highlight');
        return;
    }else if (window.innerWidth>800 && scrollPosition<2000){
         about.classList.add('highlight');
         home.classList.remove('highlight');
         contacts.classList.remove('highlight');
       return;
    } else if (window.innerWidth>800 && scrollPosition<2400){
         contacts.classList.add('highlight');
         about.classList.remove('highlight');
         return;
         //pourquoi le return?
    }

    if ((elem && window.innerWidth < 800 && scrollPos <450) || elem) {
        elem.classList.remove('highlight');
      };
};
window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);//pourquoi le click ne marche pas?