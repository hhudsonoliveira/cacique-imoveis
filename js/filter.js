/**
 * FILTER.JS - Cacique Imóveis
 * Sistema de filtros de imóveis
 */

'use strict';

// Sistema de filtros de imóveis
const filterBtns = document.querySelectorAll('.filter-btn');
const propertyCards = document.querySelectorAll('.property-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const filter = this.dataset.filter;

        // Atualizar botões ativos
        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        // Filtrar cards
        propertyCards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.style.display = 'block';
                card.classList.add('animate-fadeIn');
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Filtro por categoria no click
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', function(e) {
        const category = this.dataset.category;
        if (category) {
            // Armazenar filtro selecionado
            sessionStorage.setItem('selectedFilter', category);
        }
    });
});
