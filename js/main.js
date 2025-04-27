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

// Sticky Navigation
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Scroll-Animationen
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

document.querySelectorAll('.scroll-fade').forEach((el) => observer.observe(el));

// // Dark/Light Mode Toggle mit dynamischem Icon
// const toggleButton = document.createElement('button');
// toggleButton.innerText = '🌙';
// toggleButton.style.position = 'absolute';
// toggleButton.style.top = '1rem';
// toggleButton.style.right = '1rem';
// toggleButton.style.zIndex = '1001';
// toggleButton.style.background = 'none';
// toggleButton.style.border = 'none';
// toggleButton.style.fontSize = '1.5rem';
// toggleButton.style.cursor = 'pointer';
// document.body.appendChild(toggleButton);
//
// toggleButton.addEventListener('click', () => {
//     document.body.classList.toggle('dark-mode');
//     updateToggleIcon();
// });
//
// function updateToggleIcon() {
//     if (document.body.classList.contains('dark-mode')) {
//         toggleButton.innerText = '☀️';
//     } else {
//         toggleButton.innerText = '🌙';
//     }
// }
//
// updateToggleIcon();


// Countdown bis Ausstellung
const countdownContainer = document.createElement('div');
countdownContainer.id = 'countdown';
countdownContainer.style.position = 'fixed';
countdownContainer.style.bottom = '1rem';
countdownContainer.style.left = '50%';
countdownContainer.style.transform = 'translateX(-50%)';
countdownContainer.style.backgroundColor = '#b6b6b6';
countdownContainer.style.padding = '0.5rem 1rem';
countdownContainer.style.borderRadius = '8px';
countdownContainer.style.zIndex = '1001';
document.body.appendChild(countdownContainer);

const eventDate = new Date('2025-07-01T00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance < 0) {
        countdownContainer.innerText = 'ARTVISTA ist geöffnet!';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Bedingung: weniger als 100 Tage → nur 2-stellig
    const dayFormat = days < 100 ? String(days).padStart(2, '0') : String(days).padStart(3, '0');

    // Format immer zweistellig (z.B. 05 statt 5)
    const formatted = `${dayFormat}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    countdownContainer.innerText = `Noch ${formatted} bis ARTVISTA!`;
}

// Update alle 1 Sekunde
setInterval(updateCountdown, 1000);

// Beim Start direkt einmal aufrufen
updateCountdown();


setInterval(updateCountdown, 1000);
updateCountdown();

// Zurück nach oben Button
const topButton = document.createElement('button');
topButton.innerText = '⬆️';
topButton.style.position = 'fixed';
topButton.style.top = '5rem';
topButton.style.left = '50%';
topButton.style.transform = 'translateX(-50%)';
topButton.style.display = 'none';
topButton.style.width = '50px';
topButton.style.height = '50px';
topButton.style.padding = '0';
topButton.style.borderRadius = '50%';
topButton.style.backgroundColor = '#b6b6b6';
topButton.style.border = 'none';
topButton.style.cursor = 'pointer';
topButton.style.fontSize = '1.5rem';
topButton.style.alignItems = 'center';
topButton.style.justifyContent = 'center';
topButton.style.zIndex = '1001';
document.body.appendChild(topButton);

topButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        topButton.style.display = 'flex';
    } else {
        topButton.style.display = 'none';
    }
});
