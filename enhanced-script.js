// Enhanced Script JS - Adding modern interactions

document.addEventListener('DOMContentLoaded', function() {
    // Make body visible with fade-in
    document.body.classList.add('page-visible');
    
    // Add scroll indicator
    const scrollIndicatorElement = document.createElement('div');
    scrollIndicatorElement.className = 'scroll-indicator';
    document.body.appendChild(scrollIndicatorElement);
    
    // Update scroll indicator width on scroll
    window.addEventListener('scroll', () => {
        const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        scrollIndicatorElement.style.width = `${scrollPercentage}%`;
    });
    
    // Initialize sections with staggered delay
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add('section-visible');
        }, 100 * index);
    });
    
    // Enhanced navigation hover effects
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            // Add a subtle transition when hovering
            this.style.transition = 'all 0.3s ease';
            link.querySelectorAll('span').forEach(span => {
                span.style.transition = 'transform 0.3s ease';
                span.style.display = 'inline-block';
                span.style.transform = 'translateY(-2px)';
            });
        });
        
        link.addEventListener('mouseleave', function() {
            link.querySelectorAll('span').forEach(span => {
                span.style.transform = 'translateY(0)';
            });
        });
    });
    
    // Mobile nav enhanced effects
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');
    
    mobileNavLinks.forEach((link, index) => {
        // Add transition delay for smoother appearance
        link.parentElement.style.setProperty('--i', index);
    });
    
    // Add animation delay to experience panel display
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
            
            // Activate current tab
            tab.classList.add('active');
            tab.setAttribute('aria-selected', 'true');
            
            // Show current panel with a slight delay for animation
            panels[index].hidden = false;
            setTimeout(() => {
                panels[index].classList.add('active');
            }, 50);
        });
    });
    
    // Enhance hover effects for skill cards
    const skillCards = document.querySelectorAll('.skill-card');
    
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 20px 40px -15px var(--navy-shadow)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 10px 30px -15px var(--navy-shadow)';
        });
    });
    
    // Enhance hover effects for certification cards
    const certCards = document.querySelectorAll('.cert-card');
    
    certCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-7px)';
            this.style.boxShadow = '0 20px 40px -15px var(--navy-shadow)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 10px 30px -15px var(--navy-shadow)';
        });
    });
    
    // Add smooth header transition
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
    
    // Enhanced Skill filtering functionality with fixed selectors
    // Get all filter buttons and skill items
    const filterButtons = document.querySelectorAll('.skill-filter-btn');
    const skillItems = document.querySelectorAll('[data-skill]');
    const skillsContainer = document.querySelector('.skills-container');
    
    // Add click event to each filter button
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            // Reset all skill highlights
            skillItems.forEach(item => {
                item.classList.remove('highlighted-skill');
            });
            
            // If not showing all, highlight the filtered skills
            if (filterValue !== 'all') {
                skillsContainer.classList.add('filtering');
                
                // More robust selection method
                skillItems.forEach(item => {
                    const skillCategories = item.getAttribute('data-skill').split(' ');
                    if (skillCategories.includes(filterValue)) {
                        item.classList.add('highlighted-skill');
                    }
                });
            } else {
                // Remove filtering class when showing all
                skillsContainer.classList.remove('filtering');
            }
        });
    });
});