document.addEventListener('DOMContentLoaded', () => {
  
    const hamburger = document.querySelector('.hamburger');
    const closeMenuBttm = document.querySelector('#closeMenu')
    const navMenu = document.querySelector('.nav__list');
    const preScreem = document.querySelector('.preScreem')
    
    hamburger.addEventListener("click", mobileMenu);
    closeMenuBttm.addEventListener("click", closingMenu);

    //OPEN MENU MOBILE
    function mobileMenu() {
        navMenu.classList.add("active");
        preScreem.classList.add("active");
     }

    //CLOSE MENU MOBILE
     function closingMenu() {
         navMenu.classList.remove("active");
         preScreem.classList.remove("active");

      }
})