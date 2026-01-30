/**
 * mirAI塾 ランディングページ - JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // ==============================================
    // Hamburger Menu Toggle
    // ==============================================
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
            });
        });
    }

    // ==============================================
    // Smooth Scrolling for Navigation Links
    // ==============================================
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if href is just "#"
            if (href === '#') return;
            
            e.preventDefault();
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ==============================================
    // Header Shadow on Scroll
    // ==============================================
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // ==============================================
    // Scroll-triggered Fade-in Animations
    // ==============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const fadeInObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for fade-in animation
    const fadeElements = document.querySelectorAll('.section-content, .demo-card, .instructor-card, .challenges-list li');
    
    fadeElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        fadeInObserver.observe(element);
    });

    // ==============================================
    // Add stagger effect to challenges list items
    // ==============================================
    const challengesItems = document.querySelectorAll('.challenges-list li');
    challengesItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
    });

    // ==============================================
    // Add stagger effect to demo cards
    // ==============================================
    const demoCards = document.querySelectorAll('.demo-card');
    demoCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.15}s`;
    });

    // ==============================================
    // Add stagger effect to instructor cards
    // ==============================================
    const instructorCards = document.querySelectorAll('.instructor-card');
    instructorCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.15}s`;
    });

    // ==============================================
    // CTA Button Interaction Enhancement
    // ==============================================
    const ctaButtons = document.querySelectorAll('.cta-button, .header-cta-btn');
    
    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // ==============================================
    // Prevent Animation on Page Load
    // ==============================================
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });

    // ==============================================
    // Dynamic Year in Footer (if needed)
    // ==============================================
    const currentYear = new Date().getFullYear();
    const footerCopyright = document.querySelector('.footer-copyright');
    if (footerCopyright && currentYear > 2025) {
        footerCopyright.textContent = `© 2025-${currentYear} mirAI塾. All rights reserved.`;
    }

});
