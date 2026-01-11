/**
 * MAIN.JS - Cacique Imóveis
 * Funcionalidades principais do site
 */

'use strict';

// ============================================
// SMOOTH SCROLL
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Ignora links vazios ou apenas #
        if (href === '#' || href === '') {
            e.preventDefault();
            return;
        }

        const target = document.querySelector(href);

        if (target) {
            e.preventDefault();
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// HEADER SCROLL EFFECT
// ============================================
const header = document.querySelector('.header');
const scrollThreshold = 100;

function handleScroll() {
    if (window.scrollY > scrollThreshold) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', handleScroll);

// ============================================
// SCROLL TO TOP BUTTON
// ============================================
const scrollToTopBtn = document.getElementById('scrollToTop');

function toggleScrollToTop() {
    if (window.scrollY > 400) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
}

window.addEventListener('scroll', toggleScrollToTop);

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ============================================
// ANIMATED COUNTER
// ============================================
function animateCounter(element, target) {
    const duration = 2000;
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current).toLocaleString('pt-BR');
    }, 16);
}

// Intersection Observer para animar números quando visíveis
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
            const target = parseInt(entry.target.dataset.count);
            animateCounter(entry.target, target);
            entry.target.dataset.animated = 'true';
        }
    });
}, observerOptions);

document.querySelectorAll('.stat-number').forEach(counter => {
    counterObserver.observe(counter);
});

// ============================================
// REVEAL ON SCROLL ANIMATION
// ============================================
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
    revealObserver.observe(el);
});

// ============================================
// FAQ ACCORDION
// ============================================
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        const wasActive = faqItem.classList.contains('active');

        // Fecha todos os outros FAQs
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });

        // Abre o clicado se não estava ativo
        if (!wasActive) {
            faqItem.classList.add('active');
        }
    });
});

// ============================================
// SLIDER (RANGE INPUT) UPDATE
// ============================================
const yearsSlider = document.getElementById('years');
const yearsOutput = document.getElementById('yearsOutput');

if (yearsSlider && yearsOutput) {
    yearsSlider.addEventListener('input', function() {
        yearsOutput.textContent = `${this.value} anos`;
    });
}

// ============================================
// PHONE MASK (WhatsApp Input)
// ============================================
function phoneMask(value) {
    return value
        .replace(/\D/g, '')
        .replace(/^(\d{2})(\d)/g, '($1) $2')
        .replace(/(\d)(\d{4})$/, '$1-$2');
}

document.querySelectorAll('input[type="tel"]').forEach(input => {
    input.addEventListener('input', function(e) {
        e.target.value = phoneMask(e.target.value);
    });
});

// ============================================
// CURRENCY MASK (Price Inputs)
// ============================================
function currencyMask(value) {
    value = value.replace(/\D/g, '');
    value = (value / 1).toFixed(0);
    value = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    return value;
}

document.querySelectorAll('input[name="priceMin"], input[name="priceMax"], input[name="propertyValue"], input[name="downPayment"], input[name="income"]').forEach(input => {
    input.addEventListener('input', function(e) {
        const cursorPosition = e.target.selectionStart;
        const oldLength = e.target.value.length;

        e.target.value = currencyMask(e.target.value);

        const newLength = e.target.value.length;
        const newPosition = cursorPosition + (newLength - oldLength);

        e.target.setSelectionRange(newPosition, newPosition);
    });
});

// ============================================
// LAZY LOADING IMAGES
// ============================================
if ('loading' in HTMLImageElement.prototype) {
    // Browser supports native lazy loading
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src || img.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// TOAST NOTIFICATION SYSTEM
// ============================================
function showToast(message, type = 'info', duration = 3000) {
    const toastContainer = document.querySelector('.toast-container') || createToastContainer();

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    const icons = {
        success: '✓',
        error: '✕',
        warning: '⚠',
        info: 'ℹ'
    };

    toast.innerHTML = `
        <div class="toast-icon">${icons[type]}</div>
        <div class="toast-content">
            <p class="toast-message">${message}</p>
        </div>
        <button class="toast-close" onclick="this.parentElement.classList.add('hide')">✕</button>
    `;

    toastContainer.appendChild(toast);

    // Trigger animation
    setTimeout(() => toast.classList.add('show'), 10);

    // Auto remove
    setTimeout(() => {
        toast.classList.add('hide');
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

function createToastContainer() {
    const container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
    return container;
}

// Expor função globalmente
window.showToast = showToast;

// ============================================
// PREVENT BODY SCROLL WHEN MODAL IS OPEN
// ============================================
function lockScroll() {
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`;
}

function unlockScroll() {
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
}

window.lockScroll = lockScroll;
window.unlockScroll = unlockScroll;

// ============================================
// DEBOUNCE UTILITY
// ============================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

window.debounce = debounce;

// ============================================
// DETECT OUTSIDE CLICK
// ============================================
function onClickOutside(element, callback) {
    document.addEventListener('click', function(event) {
        if (!element.contains(event.target)) {
            callback();
        }
    });
}

window.onClickOutside = onClickOutside;

// ============================================
// CONSOLE LOG - DEV INFO
// ============================================
console.log('%c🏠 Cacique Imóveis', 'font-size: 20px; font-weight: bold; color: #FF6B35;');
console.log('%cSite desenvolvido por HO DEVWEB', 'font-size: 12px; color: #1E3A8A;');
console.log('%cWhatsApp: (71) 98304-0695', 'font-size: 12px; color: #25D366;');

// ============================================
// PERFORMANCE MONITORING (DEV)
// ============================================
if ('performance' in window) {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`⚡ Página carregada em: ${pageLoadTime}ms`);
    });
}

// ============================================
// SERVICE WORKER REGISTRATION (opcional - PWA)
// ============================================
// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', () => {
//         navigator.serviceWorker.register('/sw.js')
//             .then(registration => console.log('SW registered:', registration))
//             .catch(error => console.log('SW registration failed:', error));
//     });
// }
