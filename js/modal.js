/**
 * MODAL.JS - Cacique Imóveis
 * Sistema de modais
 */

'use strict';

// Abrir modal de imóvel
function openPropertyModal(propertyId) {
    console.log('Abrindo modal do imóvel:', propertyId);
    showToast('Funcionalidade em desenvolvimento', 'info');

    // Implementação futura:
    // - Buscar dados do imóvel
    // - Popular modal com informações
    // - Galeria de imagens
    // - Abrir modal

    /*
    const modal = document.getElementById('propertyModal');
    const modalBackdrop = document.getElementById('modalBackdrop');

    // Popular modal com dados
    // ...

    // Mostrar modal
    modalBackdrop.classList.add('show');
    modal.classList.add('show');
    lockScroll();
    */
}

// Fechar modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    const modalBackdrop = document.querySelector('.modal-backdrop');

    if (modal) {
        modal.classList.remove('show');
    }

    if (modalBackdrop) {
        modalBackdrop.classList.remove('show');
    }

    unlockScroll();
}

// Fechar modal com ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal.show').forEach(modal => {
            modal.classList.remove('show');
        });

        document.querySelectorAll('.modal-backdrop.show').forEach(backdrop => {
            backdrop.classList.remove('show');
        });

        unlockScroll();
    }
});

// Fechar modal ao clicar no backdrop
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-backdrop')) {
        closeModal();
    }
});

// Expor funções globalmente
window.openPropertyModal = openPropertyModal;
window.closeModal = closeModal;
