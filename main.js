// Regular site functionality
document.addEventListener('DOMContentLoaded', function() {
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
    
    // Tabs
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
    
    // Scroll Animation
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
      } else {
        header.style.transform = 'translateY(0)';
      }
      
      lastScrollY = window.scrollY;
    });
  });// Immediately-invoked function to clean up as early as possible
  (function() {
    let cleanupAttempts = 0;
    const MAX_CLEANUP_ATTEMPTS = 20;
  
    function removeUnwantedNavigation() {
      cleanupAttempts++;
      console.log("Cleanup attempt: " + cleanupAttempts);
  
      // Target specifically those duplicate navigation items in the top left
      const directNavItems = [
        ...document.querySelectorAll('body > a[href^="#"]'),
        ...document.querySelectorAll('body > .resume-button'),
        ...document.querySelectorAll('body > ul')
      ];
      
      directNavItems.forEach(element => {
        if (element && element.parentNode) {
          console.log("Removing element: ", element);
          element.parentNode.removeChild(element);
        }
      });
  
      // Look for those specific links we're seeing in the screenshot
      const specificItems = [
        ...document.querySelectorAll('a[href^="#skills"]'),
        ...document.querySelectorAll('a[href^="#education"]'),
        ...document.querySelectorAll('a[href^="#certifications"]'),
        ...document.querySelectorAll('a[href^="#contact"]')
      ];
  
      specificItems.forEach(link => {
        // Only remove if it's not inside our proper containers
        if (!link.closest('.nav-links') && 
            !link.closest('.mobile-nav-links') && 
            !link.closest('.hero-cta') && 
            !link.closest('.contact-wrapper')) {
          
          // Try to get the parent element
          let target = link;
          
          // If it's part of a list item, remove the list item
          if (link.parentElement && link.parentElement.tagName === 'LI') {
            target = link.parentElement;
          }
          
          // Delete the target
          if (target && target.parentNode) {
            console.log("Removing specific link: ", target);
            target.parentNode.removeChild(target);
          }
        }
      });
  
      // Targeted removal of any nav-like elements just below the body
      const bodyChildren = Array.from(document.body.children);
      bodyChildren.forEach(child => {
        // Skip certain key elements
        if (child.tagName === 'HEADER' || 
            child.tagName === 'SECTION' || 
            child.tagName === 'FOOTER' || 
            child.tagName === 'SCRIPT' ||
            child.classList.contains('overlay') ||
            child.classList.contains('mobile-nav') ||
            child.classList.contains('back-to-top') ||
            child.tagName === 'STYLE') {
          return;
        }
        
        // Check if this element has navigation-like links
        const hasNavLinks = child.querySelectorAll('a[href^="#"]').length > 0;
        
        if (hasNavLinks) {
          console.log("Removing navigation-like element: ", child);
          child.parentNode.removeChild(child);
        }
      });
  
      // If we still have duplicate links, try a more aggressive approach
      if (cleanupAttempts > 5) {
        // Find ALL navigation-like links outside our main containers and remove them
        document.querySelectorAll('a[href^="#"]').forEach(link => {
          if (!link.closest('.nav-container') &&
              !link.closest('.mobile-nav') &&
              !link.closest('.hero-cta') &&
              !link.closest('.contact-wrapper') &&
              !link.classList.contains('back-to-top') &&
              link.textContent.includes('.')) { // This targets those "01. Skills" type links
            
            // Get the highest parent that's still safe to remove
            let target = link;
            let parent = link.parentElement;
            
            while (parent && 
                  parent !== document.body && 
                  !parent.classList.contains('container') &&
                  !parent.classList.contains('section')) {
              target = parent;
              parent = parent.parentElement;
            }
            
            if (target && target.parentNode) {
              console.log("Aggressively removing: ", target);
              target.parentNode.removeChild(target);
            }
          }
        });
      }
  
      // Only keep scheduling if we haven't tried too many times
      if (cleanupAttempts < MAX_CLEANUP_ATTEMPTS) {
        setTimeout(removeUnwantedNavigation, 100 * cleanupAttempts);
      }
    }
  
    // Try to run as early as possible
    removeUnwantedNavigation();
  
    // Run after DOM content loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', removeUnwantedNavigation);
    } else {
      removeUnwantedNavigation();
    }
  })();