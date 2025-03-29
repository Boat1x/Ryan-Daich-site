// Improved typing animation using Typed.js
document.addEventListener('DOMContentLoaded', function() {
    // Check if the typing element exists
    const typingElement = document.querySelector('.typing-element');
    
    // Check if Typed.js is loaded
    if (typingElement && typeof Typed !== 'undefined') {
        // Create and initialize Typed instance with smoother settings
        new Typed(typingElement, {
            strings: [
                'I secure the digital world.',
                'I detect and mitigate threats.',
                'I build resilient systems.',
                'I protect critical infrastructure.',
                'I analyze security vulnerabilities.'
            ],
            typeSpeed: 50,           // Typing speed
            backSpeed: 30,           // Backspacing speed
            backDelay: 3000,         // Longer delay before backspacing
            startDelay: 500,         // Short delay before starting
            loop: true,
            showCursor: true,        // Show cursor
            cursorChar: '|',
            smartBackspace: true,    // Only backspace what doesn't match the previous string
            shuffle: false,          // Do not shuffle for predictable animation
            fadeOut: true,           // Use fade out transition
            fadeOutClass: 'typed-fade-out',
            fadeOutDelay: 500
        });
    } else {
        console.error('Typed.js not loaded or typing element not found');
        // Fallback if Typed.js is not working
        if (typingElement) {
            typingElement.textContent = 'I secure the digital world.';
        }
    }
});