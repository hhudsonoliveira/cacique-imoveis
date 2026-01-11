/**
 * ANIMATIONS.JS - Cacique Imóveis
 * Animações e efeitos visuais
 */

'use strict';

// Intersection Observer para reveal animations
document.addEventListener('DOMContentLoaded', () => {
    // Configurar Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    // Adicionar reveal a seções
    document.querySelectorAll('section:not(.hero)').forEach((section, index) => {
        section.classList.add('reveal');
        section.style.transitionDelay = `${index * 100}ms`;
        observer.observe(section);
    });

    // Adicionar reveal a cards
    document.querySelectorAll('.property-card, .category-card, .testimonial-card').forEach((card, index) => {
        card.classList.add('reveal-scale');
        card.style.transitionDelay = `${index * 50}ms`;
        observer.observe(card);
    });

    // Adicionar reveal a badges
    document.querySelectorAll('.badge-item').forEach((item, index) => {
        item.classList.add('reveal');
        item.style.transitionDelay = `${index * 100}ms`;
        observer.observe(item);
    });
});

// Parallax effect para hero (opcional)
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero');

    if (parallax && scrolled < window.innerHeight) {
        parallax.style.backgroundPositionY = `${scrolled * 0.5}px`;
    }
});

// Adicionar animação de hover aos botões
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });

    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Console easter egg
console.log('%c ', 'font-size: 1px; padding: 100px 200px; background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMjAwIj48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1zaXplPSI0MCIgZmlsbD0iI0ZGNkIzNSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+8J+PoCBDYWNpcXVlIEltw7N2ZWlzPC90ZXh0Pjwvc3ZnPg==) no-repeat;');
