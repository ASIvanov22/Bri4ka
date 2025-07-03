// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href').slice(1);
            const target = document.getElementById(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Mobile menu toggle (if you have a menu button)
    const menuBtn = document.querySelector('.menu-button');
    const navMenu = document.querySelector('.nav-menu');
    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', function () {
            navMenu.classList.toggle('open');
        });
    }

    // Change nav background based on current page
    const nav = document.querySelector('.nav');
    if (nav) {
        // Example: make nav semi-transparent for this page
        nav.style.background = 'rgba(0, 0, 0, 0.6)';
        nav.style.transition = 'background 0.3s';
    }
});


