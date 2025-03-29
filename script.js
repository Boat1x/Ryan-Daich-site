// Main JavaScript file for Ryan Daich's portfolio website
document.addEventListener('DOMContentLoaded', function() {
    // Clean up any unwanted navigation elements 
    function cleanupDuplicateNavigation() {
        // Target and remove duplicate navigation links
        const directNavItems = [
            ...document.querySelectorAll('body > a[href^="#"]'),
            ...document.querySelectorAll('body > .resume-button'),
            ...document.querySelectorAll('body > ul:not(.nav-links):not(.mobile-nav-links)')
        ];
        
        directNavItems.forEach(element => {
            if (element && element.parentNode) {
                element.parentNode.removeChild(element);
            }
        });
        
        // Find all links outside the main navigation containers
        const allLinks = document.querySelectorAll('a[href^="#"]');
        allLinks.forEach(link => {
            // Only remove if it's not inside our proper containers
            if (!link.closest('.nav-container') && 
                !link.closest('.mobile-nav') && 
                !link.closest('.hero-cta') && 
                !link.closest('section') &&
                !link.closest('footer') &&
                !link.classList.contains('back-to-top')) {
                
                if (link && link.parentNode) {
                    link.parentNode.removeChild(link);
                }
            }
        });
    }
    
    // Run cleanup immediately and after a short delay
    cleanupDuplicateNavigation();
    setTimeout(cleanupDuplicateNavigation, 100);
    
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    const overlay = document.querySelector('.overlay');
    const mobileLinks = document.querySelectorAll('.mobile-nav-links a');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileNav.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : 'auto';
    });
    
    overlay.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileNav.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
    
    // Experience Tabs
    const tabs = document.querySelectorAll('.tab-list-button');
    const panels = document.querySelectorAll('.tab-panel');
    
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            // Deactivate all tabs
            tabs.forEach(t => {
                t.classList.remove('active');
                t.setAttribute('aria-selected', 'false');
            });
            
            // Hide all panels
            panels.forEach(p => {
                p.hidden = true;
                p.classList.remove('active');
            });
            
            // Activate current tab and panel
            tab.classList.add('active');
            tab.setAttribute('aria-selected', 'true');
            panels[index].hidden = false;
            panels[index].classList.add('active');
        });
    });
    
    // Back to Top Button
    const backToTopButton = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    backToTopButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Smooth Scroll
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.getAttribute('href') !== '#') {
                e.preventDefault();
                
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const headerOffset = 80;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Header Scroll Effect
    const header = document.querySelector('header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        if (lastScrollY < window.scrollY && window.scrollY > 100) {
            header.style.transform = 'translateY(-100%)';
            header.style.boxShadow = 'none';
        } else {
            header.style.transform = 'translateY(0)';
            header.style.boxShadow = '0 10px 30px -10px var(--navy-shadow)';
        }
        
        lastScrollY = window.scrollY;
    });
    
    // Add hover effects to skill cards
    const skillCards = document.querySelectorAll('.skill-card');
    
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-7px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Run another cleanup after everything is loaded
    window.addEventListener('load', cleanupDuplicateNavigation);
});