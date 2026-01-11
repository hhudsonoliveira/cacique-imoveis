/**
 * FORM-VALIDATION.JS - Cacique Imóveis
 * Validação de formulários
 */

'use strict';

// ============================================
// FORMULÁRIO DE BUSCA
// ============================================
const searchForm = document.getElementById('searchForm');

if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(searchForm);
        const searchType = formData.get('searchType');
        const propertyType = formData.get('propertyType');
        const neighborhood = formData.get('neighborhood');
        const priceMin = formData.get('priceMin');
        const priceMax = formData.get('priceMax');

        // Construir query string
        const params = new URLSearchParams();
        if (searchType) params.append('tipo', searchType);
        if (propertyType) params.append('imovel', propertyType);
        if (neighborhood) params.append('bairro', neighborhood);
        if (priceMin) params.append('min', priceMin);
        if (priceMax) params.append('max', priceMax);

        // Redirecionar para página de resultados
        // window.location.href = `/imoveis?${params.toString()}`;

        // Por enquanto, mostrar toast
        showToast('Busca realizada! Em breve você verá os resultados.', 'info');
        console.log('Parâmetros de busca:', Object.fromEntries(params));
    });
}

// ============================================
// FORMULÁRIO DE CONTATO
// ============================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Validar campos
        const name = document.getElementById('contactName').value.trim();
        const phone = document.getElementById('contactPhone').value.trim();
        const interest = document.getElementById('contactInterest').value;
        const message = document.getElementById('contactMessage').value.trim();

        // Validação básica
        if (!name || name.length < 3) {
            showToast('Por favor, digite seu nome completo.', 'error');
            document.getElementById('contactName').focus();
            return;
        }

        if (!phone || phone.length < 14) {
            showToast('Por favor, digite um WhatsApp válido.', 'error');
            document.getElementById('contactPhone').focus();
            return;
        }

        if (!interest) {
            showToast('Por favor, selecione seu interesse.', 'error');
            document.getElementById('contactInterest').focus();
            return;
        }

        // Mostrar loading
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner"></span> Enviando...';

        try {
            // Simular envio (substituir por API real)
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Montar mensagem do WhatsApp
            const whatsappMessage = `
Olá! Vim através do site da Cacique Imóveis.

*Nome:* ${name}
*WhatsApp:* ${phone}
*Interesse:* ${interest}
${message ? `*Mensagem:* ${message}` : ''}
            `.trim();

            const whatsappURL = `https://wa.me/5571983040695?text=${encodeURIComponent(whatsappMessage)}`;

            // Abrir WhatsApp
            window.open(whatsappURL, '_blank');

            // Reset form
            contactForm.reset();
            showToast('Mensagem enviada! Você será redirecionado ao WhatsApp.', 'success');

        } catch (error) {
            console.error('Erro ao enviar:', error);
            showToast('Erro ao enviar mensagem. Tente novamente.', 'error');
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
        }
    });
}

// ============================================
// VALIDAÇÃO EM TEMPO REAL
// ============================================
function validateField(field) {
    const value = field.value.trim();
    const type = field.type;
    const name = field.name;

    // Remove validação anterior
    field.classList.remove('is-valid', 'is-invalid');

    // Remove feedback anterior
    const existingFeedback = field.parentElement.querySelector('.invalid-feedback, .valid-feedback');
    if (existingFeedback) {
        existingFeedback.remove();
    }

    let isValid = true;
    let message = '';

    // Validações específicas
    switch (name) {
        case 'contactName':
            if (value.length < 3) {
                isValid = false;
                message = 'Nome deve ter pelo menos 3 caracteres';
            }
            break;

        case 'contactPhone':
            const phoneRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/;
            if (!phoneRegex.test(value)) {
                isValid = false;
                message = 'Telefone inválido. Use o formato (00) 00000-0000';
            }
            break;

        case 'contactInterest':
            if (!value) {
                isValid = false;
                message = 'Por favor, selecione uma opção';
            }
            break;
    }

    // Adicionar classe de validação
    if (value.length > 0) {
        field.classList.add(isValid ? 'is-valid' : 'is-invalid');

        // Adicionar feedback
        if (!isValid) {
            const feedback = document.createElement('div');
            feedback.className = 'invalid-feedback';
            feedback.textContent = message;
            field.parentElement.appendChild(feedback);
        }
    }

    return isValid;
}

// Aplicar validação em tempo real
if (contactForm) {
    const fields = contactForm.querySelectorAll('input[required], select[required], textarea[required]');
    fields.forEach(field => {
        field.addEventListener('blur', () => validateField(field));
        field.addEventListener('input', debounce(() => validateField(field), 500));
    });
}

// ============================================
// VALIDAÇÃO DE EMAIL (se necessário)
// ============================================
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ============================================
// VALIDAÇÃO DE CPF (se necessário)
// ============================================
function validateCPF(cpf) {
    cpf = cpf.replace(/[^\d]/g, '');

    if (cpf.length !== 11) return false;
    if (/^(\d)\1{10}$/.test(cpf)) return false;

    let sum = 0;
    let remainder;

    for (let i = 1; i <= 9; i++) {
        sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }

    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf.substring(9, 10))) return false;

    sum = 0;
    for (let i = 1; i <= 10; i++) {
        sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }

    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf.substring(10, 11))) return false;

    return true;
}

// ============================================
// PREVENIR MÚLTIPLOS SUBMITS
// ============================================
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function() {
        const submitBtn = this.querySelector('button[type="submit"]');
        if (submitBtn && !submitBtn.disabled) {
            submitBtn.disabled = true;
            setTimeout(() => {
                submitBtn.disabled = false;
            }, 3000);
        }
    });
});

// ============================================
// AUTOCOMPLETE ADDRESS (se necessário)
// ============================================
/*
function searchCEP(cep) {
    cep = cep.replace(/\D/g, '');

    if (cep.length === 8) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
                if (!data.erro) {
                    document.getElementById('street').value = data.logradouro;
                    document.getElementById('neighborhood').value = data.bairro;
                    document.getElementById('city').value = data.localidade;
                    document.getElementById('state').value = data.uf;
                }
            })
            .catch(error => console.error('Erro ao buscar CEP:', error));
    }
}
*/
