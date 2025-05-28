document.addEventListener('DOMContentLoaded', function() {
    const arrow = document.querySelector('.arrow');
    
    // Play the "Netflix" sound effect if you want to add that later
    
    // Handle click on arrow to go to the main portfolio
    arrow.addEventListener('click', function() {
        // Add fade-out animation
        document.querySelector('.container').style.animation = 'fade-out 1s forwards';
        
        // Redirect to the main portfolio page after the animation
        setTimeout(function() {
            window.location.href = 'base.html'; // Your main portfolio page
        }, 1000);
    });
});

// Add fade-out animation
document.styleSheets[0].insertRule(`
    @keyframes fade-out {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
`, document.styleSheets[0].cssRules.length);