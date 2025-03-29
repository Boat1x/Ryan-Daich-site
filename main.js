// Enhanced portfolio website script
document.addEventListener('DOMContentLoaded', function() {
    // Fade-in animation for sections
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -100px 0px"
    };
    
    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add('appear');
          appearOnScroll.unobserve(entry.target);
        }
      });
    }, appearOptions);
    
    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });
  
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
    
    // Set mobile nav animation delay for each item
    mobileLinks.forEach((link, index) => {
      link.parentElement.style.setProperty('--i', index);
    });
    
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
    
    // Experience Tabs with animation
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
        
        // Add small delay for animation to be visible
        setTimeout(() => {
          panels[index].classList.add('active');
        }, 50);
      });
    });
    
    // Back to Top Button with smooth animation
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
    
    // Smooth Scroll with better animation
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
    
    // Header Scroll Effect with enhanced animation
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
        this.style.transform = 'translateY(-10px)';
        const icon = this.querySelector('.skill-icon');
        if (icon) {
          icon.style.transform = 'scale(1.2)';
        }
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        const icon = this.querySelector('.skill-icon');
        if (icon) {
          icon.style.transform = 'scale(1)';
        }
      });
    });
    
    // Add hover effects to certification cards
    const certCards = document.querySelectorAll('.cert-card');
    
    certCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
        this.style.boxShadow = '0 20px 40px -20px var(--navy-shadow)';
        
        const logo = this.querySelector('.cert-logo');
        if (logo) {
          logo.style.backgroundColor = 'var(--secondary-color)';
          logo.style.color = 'var(--navy)';
        }
        
        const actions = this.querySelector('.cert-actions');
        if (actions) {
          actions.style.opacity = '1';
          actions.style.transform = 'translateY(0)';
        }
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 10px 30px -15px var(--navy-shadow)';
        
        const logo = this.querySelector('.cert-logo');
        if (logo) {
          logo.style.backgroundColor = 'var(--navy)';
          logo.style.color = 'var(--secondary-color)';
        }
        
        const actions = this.querySelector('.cert-actions');
        if (actions) {
          actions.style.opacity = '0';
          actions.style.transform = 'translateY(10px)';
        }
      });
    });
    
    // Typed.js effect for hero section
    if (typeof Typed !== 'undefined') {
      const options = {
        strings: ['I secure the digital world.', 'I detect and respond to threats.', 'I build secure infrastructures.'],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        cursorChar: '|',
        fadeOut: true,
        smartBackspace: true
      };
      
      const heroSubtitle = document.querySelector('.typing-text');
      if (heroSubtitle) {
        new Typed(heroSubtitle, options);
      }
    }
    
    // Scroll progress indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (scrollIndicator) {
      window.addEventListener('scroll', () => {
        const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        scrollIndicator.style.width = `${scrollPercentage}%`;
      });
    }
    
    // Initialize sections with staggered delay
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
      setTimeout(() => {
        section.classList.add('section-visible');
      }, 100 * index);
    });
    
    // Add animations to education cards
    const educationCards = document.querySelectorAll('.education-card');
    
    educationCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-7px)';
        this.style.boxShadow = '0 20px 40px -20px var(--navy-shadow)';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 10px 30px -15px var(--navy-shadow)';
      });
    });
    
    // Course boxes hover effect
    const courseBoxes = document.querySelectorAll('.course-box');
    
    courseBoxes.forEach(box => {
      box.addEventListener('mouseenter', function() {
        this.style.backgroundColor = 'var(--navy)';
        this.style.borderLeft = '2px solid var(--secondary-color)';
        this.style.transform = 'translateX(5px)';
      });
      
      box.addEventListener('mouseleave', function() {
        this.style.backgroundColor = 'var(--lightest-navy)';
        this.style.borderLeft = '2px solid transparent';
        this.style.transform = 'translateX(0)';
      });
    });
    
    // Run another cleanup after everything is loaded
    window.addEventListener('load', cleanupDuplicateNavigation);
  });