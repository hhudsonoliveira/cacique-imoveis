/**
 * MENU.JS - Cacique Imóveis
 * Controle do menu de navegação mobile
 */

'use strict';

// ============================================
// MOBILE MENU TOGGLE
// ============================================
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle menu
menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';

    // Toggle aria-expanded
    menuToggle.setAttribute('aria-expanded', !isExpanded);

    // Toggle menu
    navMenu.classList.toggle('active');

    // Lock/unlock scroll
    if (navMenu.classList.contains('active')) {
        lockScroll();
    } else {
        unlockScroll();
    }
});

// Fechar menu ao clicar em um link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        unlockScroll();
    });
});

// Fechar menu ao clicar fora
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            unlockScroll();
        }
    }
});

// Fechar menu com tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        unlockScroll();
    }
});

// ============================================
// ACTIVE LINK ON SCROLL
// ============================================
function setActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const correspondingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (correspondingLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                correspondingLink.classList.add('active');
            } else {
                correspondingLink.classList.remove('active');
            }
        }
    });
}

// Debounce para melhor performance
const debouncedSetActiveLink = debounce(setActiveLink, 100);

window.addEventListener('scroll', debouncedSetActiveLink);
window.addEventListener('load', setActiveLink);

// ============================================
// DROPDOWN MENU (se necessário no futuro)
// ============================================
/*
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        e.preventDefault();
        const dropdown = toggle.nextElementSibling;

        // Fechar outros dropdowns
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            if (menu !== dropdown) {
                menu.classList.remove('show');
            }
        });

        // Toggle current dropdown
        dropdown.classList.toggle('show');
    });
});

// Fechar dropdown ao clicar fora
document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.classList.remove('show');
        });
    }
});
*/
