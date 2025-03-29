// Improved typing animation using Typed.js
document.addEventListener('DOMContentLoaded', function() {
    // Check if the typing element exists
    const typingElement = document.querySelector('.typing-element');
    
    // Add CSS styles for text overflow and wrapping
    const style = document.createElement('style');
    style.textContent = `
        .typing-element {
            max-width: 100%;
            white-space: pre-wrap;
            word-wrap: break-word;
            overflow-wrap: break-word;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            min-height: 3rem;
            line-height: 1.2;
            position: relative;
            margin: 1rem 0 3rem 0;
            color: rgba(255, 255, 255, 0.7);
            font-size: 3rem;
        }
        .typed-cursor {
            font-size: 3rem;
            opacity: 1;
            animation: blink 0.7s infinite;
            vertical-align: text-top;
        }
        @keyframes blink {
            0% { opacity: 1; }
            50% { opacity: 0; }
            100% { opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    
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