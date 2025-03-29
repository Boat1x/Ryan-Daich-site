// Main JavaScript file for Ryan Daich's portfolio website
document.addEventListener('DOMContentLoaded', function() {
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
    
    // Configure email mailto link
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(link => {
        const email = 'Ryandaich1@gmail.com';
        const subject = 'Getting in touch from your website';
        const body = 'Hi Ryan,\n\nI came across your portfolio website and would like to connect.\n\n';
        
        link.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
    
    // Add resume download handler for any links with the resume-button class
    const resumeButtons = document.querySelectorAll('.resume-button');
    resumeButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Only prevent default if the direct download doesn't work
            const isDownloadSupported = 'download' in document.createElement('a');
            if (!isDownloadSupported) {
                e.preventDefault();
                downloadResume();
            }
        });
    });
});

// Properly implemented download function
function downloadResume() {
    const resumePath = 'resume/Ryan_Daich_Resume SITE.pdf';
    const downloadName = 'Ryan_Daich_Resume.pdf';
    
    // Try using the Fetch API first
    fetch(resumePath)
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = downloadName;
            document.body.appendChild(link);
            link.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(link);
        })
        .catch(err => {
            console.error('Error downloading resume:', err);
            // Fallback to direct window.open
            window.open(resumePath, '_blank');
        });
}