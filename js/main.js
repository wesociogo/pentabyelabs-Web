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

    // --- Active Nav Link Logic ---
    const currentLocation = window.location.pathname; // Gets the current page path, e.g., "/services.html"
    const navLinks = document.querySelectorAll('.nav-links a');

    // Determine if the current page is the home page.
    const isHomePage = (currentLocation === '/' || currentLocation.endsWith('/index.html'));

    navLinks.forEach(link => {
        // Per the request, skip the 'Contact Us' button from this active state logic.
        if (link.classList.contains('btn')) {
            return;
        }

        const linkHref = link.getAttribute('href');
        
        // First, ensure no link is active by default.
        link.classList.remove('active');

        // Check if the link corresponds to the current page and should be active.
        if (linkHref === 'index.html' && isHomePage) {
            link.classList.add('active');
        } else if (linkHref !== 'index.html' && currentLocation.endsWith(linkHref)) {
            // Use .endsWith() for a precise match on other pages.
            link.classList.add('active');
        }
    });

});