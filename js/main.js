// Hero-Button
const heroButton = document.getElementById('hero-button');

if (heroButton) {
    heroButton.addEventListener('click', function(event) {
       event.preventDefault();
       const target = document.getElementById('ueber');
       if (target) {
           target.scrollIntoView({behavior: 'smooth'});
       }
    });
}

// Burger-Menü
const menuToggle = document.getElementById('menu-toggle');
const mainMenu = document.getElementById('main-menu');

if (menuToggle && mainMenu) {
    menuToggle.addEventListener('click', function() {
        mainMenu.classList.toggle('visible');
    });
}