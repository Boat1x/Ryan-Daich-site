// Main JavaScript file for Ryan Daich's portfolio website
document.addEventListener('DOMContentLoaded', function() {
    // Fix navigation duplication issue
    const removeExtraNavLinks = () => {
        // Remove any duplicate navigation link sets that appear directly as children of body
        const directNavLinks = document.querySelectorAll('body > a[href^="#"]');
        directNavLinks.forEach(link => {
            if (link.parentNode === document.body) {
                document.body.removeChild(link);
            }
        });
        
        // Remove any extra resume buttons
        const extraResumeButtons = document.querySelectorAll('body > .resume-button');
        extraResumeButtons.forEach(button => {
            if (button.parentNode === document.body) {
                document.body.removeChild(button);
            }
        });
        
        // Remove any nav lists outside containers
        const outsideNavLists = document.querySelectorAll('body > ul');
        outsideNavLists.forEach(list => {
            if (list.parentNode === document.body && 
                !list.classList.contains('nav-links') && 
                !list.classList.contains('mobile-nav-links')) {
                document.body.removeChild(list);
            }
        });
    };
    
    // Run cleanup on load and after a short delay
    removeExtraNavLinks();
    setTimeout(removeExtraNavLinks, 100);
    
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    const overlay = document.querySelector('.overlay');
    const mobileLinks = document.querySelectorAll('.mobile-nav-links a');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileNav.classList.toggle('active');
            overlay.classList.toggle('active');
            document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : 'auto';
        });
    }
    
    if (overlay) {
        overlay.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileNav.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }
    
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
            
            // Add a small delay for smooth animation
            setTimeout(() => {
                panels[index].classList.add('active');
            }, 50);
        });
    });
    
    // Back to Top Button
    const backToTopButton = document.querySelector('.back-to-top');
    
    if (backToTopButton) {
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
    }
    
    // Smooth Scroll for all hash links
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
    
    // Add hover effects to certification cards
    const certCards = document.querySelectorAll('.cert-card');
    
    certCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-7px)';
            this.style.boxShadow = '0 20px 40px -20px var(--navy-shadow)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 10px 30px -15px var(--navy-shadow)';
        });
    });
    
    // Run cleanup again after everything is loaded
    window.addEventListener('load', removeExtraNavLinks);
    
    // Prevent navigation duplication if page is refreshed
    window.addEventListener('beforeunload', () => {
        removeExtraNavLinks();
    });
});