/**
 * FAVORITES.JS - Cacique Imóveis
 * Sistema de favoritos (localStorage)
 */

'use strict';

// Gerenciador de favoritos
class FavoritesManager {
    constructor() {
        this.storageKey = 'cacique_favorites';
        this.favorites = this.load();
        this.init();
    }

    init() {
        // Adicionar event listeners aos botões de favorito
        document.querySelectorAll('.btn-favorite').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();

                const propertyCard = btn.closest('.property-card');
                const propertyId = propertyCard?.dataset.id || Math.random().toString();

                this.toggle(propertyId);
                btn.classList.toggle('active');
            });
        });

        // Restaurar estado dos favoritos
        this.updateUI();
    }

    load() {
        try {
            return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
        } catch {
            return [];
        }
    }

    save() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.favorites));
    }

    toggle(propertyId) {
        const index = this.favorites.indexOf(propertyId);

        if (index > -1) {
            this.favorites.splice(index, 1);
            showToast('Imóvel removido dos favoritos', 'info');
        } else {
            this.favorites.push(propertyId);
            showToast('Imóvel adicionado aos favoritos ❤️', 'success');
        }

        this.save();
        this.updateUI();
    }

    isFavorite(propertyId) {
        return this.favorites.includes(propertyId);
    }

    updateUI() {
        document.querySelectorAll('.property-card').forEach(card => {
            const propertyId = card.dataset.id;
            const btn = card.querySelector('.btn-favorite');

            if (btn && propertyId && this.isFavorite(propertyId)) {
                btn.classList.add('active');
            }
        });
    }

    getFavorites() {
        return this.favorites;
    }

    clear() {
        this.favorites = [];
        this.save();
        this.updateUI();
        showToast('Todos os favoritos foram removidos', 'info');
    }
}

// Inicializar gerenciador de favoritos
const favoritesManager = new FavoritesManager();

// Expor globalmente
window.favoritesManager = favoritesManager;
