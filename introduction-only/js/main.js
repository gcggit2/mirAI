// ================================================
// Mobile Menu Toggle
// ================================================
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const nav = document.getElementById('nav');
    
    if (mobileMenuToggle && nav) {
        mobileMenuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
        
        // Close menu when clicking nav links
        const navLinks = nav.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                nav.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!nav.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
                nav.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        });
    }
});

// ================================================
// Smooth Scroll
// ================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ================================================
// Scroll Animations
// ================================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements with fade-in class
document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.problem-card, .feature-card, .instructor-card, .target-card, .faq-item');
    fadeElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// ================================================
// FAQ Accordion
// ================================================
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all items
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});

// ================================================
// Header Scroll Effect
// ================================================
let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
    }
    
    lastScrollTop = scrollTop;
}, { passive: true });

// ================================================
// Lazy Loading Images
// ================================================
document.addEventListener('DOMContentLoaded', function() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    imageObserver.unobserve(img);
                }
            });
        });
        
        const images = document.querySelectorAll('img[data-src]');
        images.forEach(img => imageObserver.observe(img));
    }
});

// ================================================
// CTA Button Tracking (Optional - for analytics)
// ================================================
document.addEventListener('DOMContentLoaded', function() {
    const ctaButtons = document.querySelectorAll('a[href*="forms.gle"]');
    
    ctaButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            console.log(`CTA Button clicked: Position ${index + 1}`);
            // Add your analytics tracking code here
            // Example: gtag('event', 'click', { 'event_category': 'CTA', 'event_label': 'Position ' + (index + 1) });
        });
    });
});

// ================================================
// Page Load Performance
// ================================================
window.addEventListener('load', function() {
    // Remove loading state if any
    document.body.classList.remove('loading');
    
    // Add loaded class for animations
    document.body.classList.add('loaded');
});

// ================================================
// Prevent FOUC (Flash of Unstyled Content)
// ================================================
document.addEventListener('DOMContentLoaded', function() {
    document.body.style.visibility = 'visible';
});
