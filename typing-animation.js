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
            typeSpeed: 30,           // Slower typing speed for smoother appearance
            backSpeed: 20,           // Slower backspacing for smoother appearance
            backDelay: 3000,         // Longer delay before backspacing
            startDelay: 1000,        // Longer delay before starting
            loop: true,
            showCursor: false,       // Hide the cursor completely
            cursorChar: '',
            smartBackspace: true,    // Only backspace what doesn't match the previous string
            shuffle: false,          // Do not shuffle for predictable animation
            fadeOut: true,           // Use fade out transition
            fadeOutClass: 'typed-fade-out',
            fadeOutDelay: 500
        });
    }
});