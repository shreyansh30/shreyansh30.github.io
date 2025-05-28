function showDownloadPopup() {
        alert("Your file is downloading...");
    }
document.addEventListener('DOMContentLoaded', function() {
    // Navbar background change on scroll
    const navbar = document.querySelector('nav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

// Scroll hint animation
// For Certificates Carousel
const certificatesCarousel = document.querySelector('.certificates-carousel');
if (certificatesCarousel) {
    const certificatesObserver = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
            // Add a 1-second timeout before starting the scroll hint animation
            setTimeout(() => {
                const originalScroll = certificatesCarousel.scrollLeft;
                certificatesCarousel.scrollTo({
                    left: originalScroll + 100,
                    behavior: 'smooth'
                });

                setTimeout(() => {
                    certificatesCarousel.scrollTo({
                        left: originalScroll,
                        behavior: 'smooth'
                    });
                }, 500); // After 0.5 seconds, scroll back
            }, 1000); // 1-second timeout

            // Disconnect the observer after the animation has run once
            certificatesObserver.disconnect();
        }
    }, { threshold: 0.5 }); // Trigger when 50% of the section is visible

    certificatesObserver.observe(certificatesCarousel);
}

// For Projects Carousel
const projectCarousel = document.querySelector('.project-carousel');
if (projectCarousel) {
    const projectsObserver = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
            // Add a 1-second timeout before starting the scroll hint animation
            setTimeout(() => {
                const originalScroll = projectCarousel.scrollLeft;
                projectCarousel.scrollTo({
                    left: originalScroll + 100,
                    behavior: 'smooth'
                });

                setTimeout(() => {
                    projectCarousel.scrollTo({
                        left: originalScroll,
                        behavior: 'smooth'
                    });
                }, 500); // After 0.5 seconds, scroll back
            }, 1000); // 1-second timeout

            // Disconnect the observer after the animation has run once
            projectsObserver.disconnect();
        }
    }, { threshold: 0.5 }); // Trigger when 50% of the section is visible

    projectsObserver.observe(projectCarousel);
}
// For skills
window.addEventListener('load', function () {
    const skillsSection = document.querySelector('#skills'); // The skills section
    const skillsContainer = document.querySelector('.skills-container'); // The scrollable container

    if (skillsSection && skillsContainer) {
        // Use Intersection Observer to detect when the section is visible
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                // Add a 2 ms delay before the wiggle animation starts
                setTimeout(() => {
                    let originalScroll = skillsContainer.scrollLeft;

                    // Scroll to the right
                    skillsContainer.scrollTo({
                        left: originalScroll + 100,
                        behavior: 'smooth'
                    });

                    // Scroll back after a short delay
                    setTimeout(() => {
                        skillsContainer.scrollTo({
                            left: originalScroll,
                            behavior: 'smooth'
                        });
                    }, 500); // After 0.5 seconds, scroll back
                }, 1000); // 1 s delay

                // Disconnect the observer after the animation has run once
                observer.disconnect();
            }
        }, { threshold: 0.5 }); // Trigger when 50% of the section is visible

        // Observe the skills section
        observer.observe(skillsSection);
    }
});


    // Project carousel horizontal scroll by mouse drag
    const carousels = document.querySelectorAll('.project-carousel');
    
    carousels.forEach(carousel => {
        let isDown = false;
        let startX;
        let scrollLeft;
        
        carousel.addEventListener('mousedown', (e) => {
            isDown = true;
            carousel.style.cursor = 'grabbing';
            startX = e.pageX - carousel.offsetLeft;
            scrollLeft = carousel.scrollLeft;
        });
        
        carousel.addEventListener('mouseleave', () => {
            isDown = false;
            carousel.style.cursor = 'grab';
        });
        
        carousel.addEventListener('mouseup', () => {
            isDown = false;
            carousel.style.cursor = 'grab';
        });
        
        carousel.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - carousel.offsetLeft;
            const walk = (x - startX) * 2; // Scroll speed
            carousel.scrollLeft = scrollLeft - walk;
        });
    });

// Certificates carousel horizontal scroll by mouse drag
//const certificatesCarousel = document.querySelector('.certificates-carousel');
if (certificatesCarousel) {
    let isDown = false;
    let startX;
    let scrollLeft;

    certificatesCarousel.addEventListener('mousedown', (e) => {
        isDown = true;
        certificatesCarousel.style.cursor = 'grabbing';
        startX = e.pageX - certificatesCarousel.offsetLeft;
        scrollLeft = certificatesCarousel.scrollLeft;
    });

    certificatesCarousel.addEventListener('mouseleave', () => {
        isDown = false;
        certificatesCarousel.style.cursor = 'grab';
    });

    certificatesCarousel.addEventListener('mouseup', () => {
        isDown = false;
        certificatesCarousel.style.cursor = 'grab';
    });

    certificatesCarousel.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - certificatesCarousel.offsetLeft;
        const walk = (x - startX) * 2; // Control scroll speed
        certificatesCarousel.scrollLeft = scrollLeft - walk;
    });
}

const skillsContainer = document.querySelector(".skills-container");

let isDragging = false;
let startX;
let scrollLeft;

// Mouse Down Event
skillsContainer.addEventListener("mousedown", (e) => {
    isDragging = true;
    skillsContainer.classList.add("dragging");
    startX = e.pageX - skillsContainer.offsetLeft;
    scrollLeft = skillsContainer.scrollLeft;
});

// Mouse Leave Event
skillsContainer.addEventListener("mouseleave", () => {
    isDragging = false;
    skillsContainer.classList.remove("dragging");
});

// Mouse Up Event
skillsContainer.addEventListener("mouseup", () => {
    isDragging = false;
    skillsContainer.classList.remove("dragging");
});

// Mouse Move Event
skillsContainer.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - skillsContainer.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed
    skillsContainer.scrollLeft = scrollLeft - walk;
});

    // Form submission event handler
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // In a real application, you would send this data to a server
            console.log('Form submission:', { name, email, message });
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Netflix style hover effect - enlarges card on hover
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        // Set initial state
        card.style.cursor = 'pointer';
        
        card.addEventListener('mouseover', function() {
            // Add delay for Netflix-like effect
            setTimeout(() => {
                this.classList.add('hovered');
            }, 300);
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('hovered');
        });
    });
});


// Add fade-in animation for sections when they come into view
const observeElements = () => {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
};

// Run the animation observer once page has loaded
window.addEventListener('load', observeElements);