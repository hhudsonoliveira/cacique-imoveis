/**
 * CAROUSEL.JS - Cacique Imóveis
 * Sistema de carrossel/slider
 */

'use strict';

// ============================================
// TESTIMONIALS CAROUSEL
// ============================================
class Carousel {
    constructor(container, options = {}) {
        this.container = container;
        this.items = container.querySelectorAll('.testimonial-card');
        this.currentIndex = 0;
        this.autoplayInterval = null;
        this.options = {
            autoplay: options.autoplay !== false,
            interval: options.interval || 5000,
            itemsPerView: options.itemsPerView || 2
        };

        this.init();
    }

    init() {
        this.createControls();
        this.createDots();
        this.updateView();

        if (this.options.autoplay) {
            this.startAutoplay();
            this.container.addEventListener('mouseenter', () => this.stopAutoplay());
            this.container.addEventListener('mouseleave', () => this.startAutoplay());
        }
    }

    createControls() {
        const prevBtn = document.querySelector('.carousel-prev');
        const nextBtn = document.querySelector('.carousel-next');

        if (prevBtn) prevBtn.addEventListener('click', () => this.prev());
        if (nextBtn) nextBtn.addEventListener('click', () => this.next());
    }

    createDots() {
        const dotsContainer = document.getElementById('testimonialDots');
        if (!dotsContainer) return;

        dotsContainer.innerHTML = '';
        const numDots = Math.ceil(this.items.length / this.options.itemsPerView);

        for (let i = 0; i < numDots; i++) {
            const dot = document.createElement('button');
            dot.addEventListener('click', () => this.goTo(i * this.options.itemsPerView));
            dotsContainer.appendChild(dot);
        }

        this.dots = dotsContainer.querySelectorAll('button');
    }

    updateView() {
        this.items.forEach((item, index) => {
            item.style.display = 'none';
        });

        for (let i = 0; i < this.options.itemsPerView; i++) {
            const index = (this.currentIndex + i) % this.items.length;
            if (this.items[index]) {
                this.items[index].style.display = 'block';
            }
        }

        this.updateDots();
    }

    updateDots() {
        if (!this.dots) return;

        this.dots.forEach((dot, index) => {
            const dotIndex = index * this.options.itemsPerView;
            dot.classList.toggle('active', dotIndex === this.currentIndex);
        });
    }

    next() {
        this.currentIndex = (this.currentIndex + this.options.itemsPerView) % this.items.length;
        this.updateView();
    }

    prev() {
        this.currentIndex = (this.currentIndex - this.options.itemsPerView + this.items.length) % this.items.length;
        this.updateView();
    }

    goTo(index) {
        this.currentIndex = index;
        this.updateView();
    }

    startAutoplay() {
        this.autoplayInterval = setInterval(() => this.next(), this.options.interval);
    }

    stopAutoplay() {
        if (this.autoplayInterval) {
            clearInterval(this.autoplayInterval);
        }
    }
}

// Inicializar carrossel de depoimentos
const testimonialsCarousel = document.getElementById('testimonialsCarousel');
if (testimonialsCarousel) {
    const itemsPerView = window.innerWidth >= 1024 ? 2 : 1;
    new Carousel(testimonialsCarousel, { autoplay: true, itemsPerView });
}

// Responsive: reinicializar ao redimensionar
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        if (testimonialsCarousel) {
            const itemsPerView = window.innerWidth >= 1024 ? 2 : 1;
            new Carousel(testimonialsCarousel, { autoplay: true, itemsPerView });
        }
    }, 250);
});
