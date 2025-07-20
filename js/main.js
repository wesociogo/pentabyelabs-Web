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

    const contactForm = document.getElementById('contact-form');
    const thankYouMessage = document.getElementById('thank-you-message');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // A short delay to allow the form to submit to the hidden iframe
            // before we hide the form and show the thank you message.
            setTimeout(function() {
                if (thankYouMessage) {
                    contactForm.style.display = 'none';
                    thankYouMessage.style.display = 'block';
                }
            }, 500); // 500ms delay
        });
    }

    const currentLocation = window.location.pathname; // Gets the current page path, e.g., "/contact.html"
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        // For the homepage, the path might be "/" or "/index.html". We check for both.
        if (link.getAttribute('href') === 'index.html' && (currentLocation === '/' || currentLocation.includes('index.html'))) {
            link.classList.add('active');
        }
        // For all other pages, we check if the link's href is INCLUDED in the current URL path.
        // This is more robust than a direct match.
        else if (link.getAttribute('href') !== 'index.html' && currentLocation.includes(link.getAttribute('href'))) {
            // Check that it's not a button, which might also have an .active class
            if (!link.classList.contains('btn')) {
                link.classList.add('active');
            }
        }
    });

});