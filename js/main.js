// main.js

document.addEventListener("DOMContentLoaded", function() {

    // Intersection Observer for fade-in animations
    const fade_in_sections = document.querySelectorAll('.fade-in-section');

    const options = {
        root: null, // relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of the element needs to be visible
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Stop observing after it's visible
            }
        });
    }, options);

    fade_in_sections.forEach(section => {
        observer.observe(section);
    });

    

    // --- Hamburger Menu Logic ---
    const hamburgerButton = document.getElementById('hamburger-button');
    const navMenu = document.getElementById('nav-menu');

    if (hamburgerButton && navMenu) {
        hamburgerButton.addEventListener('click', () => {
            // Toggle the .active class on the hamburger button
            hamburgerButton.classList.toggle('active');
            
            // Toggle the .active class on the navigation menu
            navMenu.classList.toggle('active');
        });
    }

});