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

// Dark/Light Mode
const toggleButton = document.createElement('button');
toggleButton.innerText = '🌙 / ☀️';
toggleButton.style.position = 'fixed';
toggleButton.style.bottom = '1rem';
toggleButton.style.right = '1rem';
toggleButton.style.zIndex = '1001';
document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Countdown bis Ausstellung
const countdownContainer = document.createElement('div');
countdownContainer.id = 'countdown';
countdownContainer.style.position = 'fixed';
countdownContainer.style.top = '1rem';
countdownContainer.style.right = '1rem';
countdownContainer.style.backgroundColor = '#eee';
countdownContainer.style.padding = '0.5rem 1rem';
countdownContainer.style.borderRadius = '8px';
document.body.appendChild(countdownContainer);

// Ziel-Datum (z.B. 1. Juli 2025)
const eventDate = new Date('2025-07-01T00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance < 0) {
        countdownContainer.innerText = 'ARTVISTA ist geöffnet!';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    countdownContainer.innerText = `Noch ${days} Tage bis ARTVISTA!`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Benutzerbegrüßung
if (!localStorage.getItem('artvistaVisited')) {
    setTimeout(() => {
        alert('Willkommen bei ARTVISTA 2025! Viel Spaß beim Entdecken. 🎨');
        localStorage.setItem('artvistaVisited', 'true');
    }, 500); // Nach 0,5 Sekunden
}

// Zurück nach oben Button
const topButton = document.createElement('button');
topButton.innerText = '⬆️';
topButton.style.position = 'fixed';
topButton.style.bottom = '4rem';
topButton.style.right = '1rem';
topButton.style.display = 'none';
topButton.style.padding = '0.5rem 1rem';
topButton.style.borderRadius = '50%';
topButton.style.zIndex = '1001';
document.body.appendChild(topButton);

topButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        topButton.style.display = 'block';
    } else {
        topButton.style.display = 'none';
    }
});