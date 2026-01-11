/**
 * CALCULATOR.JS - Cacique Imóveis
 * Calculadora de Financiamento Imobiliário
 */

'use strict';

// ============================================
// CALCULADORA DE FINANCIAMENTO
// ============================================
const calculatorForm = document.getElementById('calculatorForm');
const calculatorResult = document.getElementById('calculatorResult');

if (calculatorForm) {
    calculatorForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Pegar valores do formulário
        const propertyValueRaw = document.getElementById('propertyValue').value.replace(/\D/g, '');
        const downPaymentRaw = document.getElementById('downPayment').value.replace(/\D/g, '');
        const incomeRaw = document.getElementById('income').value.replace(/\D/g, '');
        const years = parseInt(document.getElementById('years').value);

        // Converter para números
        const propertyValue = parseFloat(propertyValueRaw) || 0;
        const downPayment = parseFloat(downPaymentRaw) || 0;
        const income = parseFloat(incomeRaw) || 0;

        // Validações básicas
        if (propertyValue <= 0) {
            showToast('Digite um valor válido para o imóvel', 'error');
            return;
        }

        if (income <= 0) {
            showToast('Digite uma renda familiar válida', 'error');
            return;
        }

        if (downPayment > propertyValue) {
            showToast('O valor de entrada não pode ser maior que o valor do imóvel', 'error');
            return;
        }

        // Calcular financiamento
        const result = calculateFinancing(propertyValue, downPayment, income, years);

        // Mostrar resultado
        displayResult(result);

        // Scroll suave até o resultado
        setTimeout(() => {
            calculatorResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    });
}

/**
 * Calcula o financiamento imobiliário
 */
function calculateFinancing(propertyValue, downPayment, income, years) {
    // Valor a financiar
    const amountToFinance = propertyValue - downPayment;

    // Taxa de juros mensal (aproximada do mercado brasileiro - 2024)
    // Para MCMV: 4.5% a.a. = 0.368% a.m.
    // Para outros: 11% a.a. = 0.873% a.m.
    // Usando média de 9% a.a. = 0.72% a.m.
    const annualRate = 9; // 9% ao ano
    const monthlyRate = annualRate / 100 / 12;

    // Número de parcelas
    const months = years * 12;

    // Calcular parcela usando Sistema Price (SAC também poderia ser usado)
    const monthlyPayment = (amountToFinance * monthlyRate * Math.pow(1 + monthlyRate, months)) /
                           (Math.pow(1 + monthlyRate, months) - 1);

    // Verificar comprometimento de renda (máximo 30%)
    const maxPayment = income * 0.30;
    const incomeCommitment = (monthlyPayment / income) * 100;

    // Status da aprovação
    let status = '';
    let statusClass = '';

    if (monthlyPayment <= maxPayment * 0.8) {
        status = 'APROVADO';
        statusClass = 'success';
    } else if (monthlyPayment <= maxPayment) {
        status = 'ANÁLISE NECESSÁRIA';
        statusClass = 'warning';
    } else {
        status = 'VALOR ALTO';
        statusClass = 'error';
    }

    // Verificar renda mínima para MCMV
    const isMCMV = income >= 2000 && income <= 8000 && propertyValue <= 350000;

    return {
        monthlyPayment: isNaN(monthlyPayment) ? 0 : monthlyPayment,
        months,
        totalPaid: isNaN(monthlyPayment) ? 0 : monthlyPayment * months,
        incomeCommitment,
        status,
        statusClass,
        isMCMV,
        annualRate
    };
}

/**
 * Exibe o resultado do cálculo
 */
function displayResult(result) {
    // Atualizar valores
    document.getElementById('monthlyPayment').textContent = formatCurrency(result.monthlyPayment);
    document.getElementById('totalMonths').textContent = `${result.months} meses (${result.months / 12} anos)`;
    document.getElementById('approvalStatus').textContent = result.status;

    // Atualizar ícone de status
    const statusIcon = document.getElementById('statusIcon');
    if (result.statusClass === 'success') {
        statusIcon.textContent = '✅';
    } else if (result.statusClass === 'warning') {
        statusIcon.textContent = '⚠️';
    } else {
        statusIcon.textContent = '❌';
    }

    // Adicionar classe de cor
    const resultItems = calculatorResult.querySelectorAll('.result-item');
    resultItems[2].className = `result-item result-${result.statusClass}`;

    // Mostrar resultado
    calculatorResult.style.display = 'block';

    // Animar entrada
    calculatorResult.classList.remove('animate-fadeInUp');
    void calculatorResult.offsetWidth; // Force reflow
    calculatorResult.classList.add('animate-fadeInUp');
}

/**
 * Formata número como moeda brasileira
 */
function formatCurrency(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    }).format(value);
}

/**
 * Formata número como percentual
 */
function formatPercent(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'percent',
        minimumFractionDigits: 1,
        maximumFractionDigits: 1
    }).format(value / 100);
}

// ============================================
// CALCULADORA RÁPIDA (para cards de imóveis)
// ============================================
function quickCalculate(propertyValue, downPayment = 0, years = 20) {
    const monthlyRate = 0.0072; // 9% a.a.
    const months = years * 12;
    const amountToFinance = propertyValue - downPayment;

    const monthlyPayment = (amountToFinance * monthlyRate * Math.pow(1 + monthlyRate, months)) /
                           (Math.pow(1 + monthlyRate, months) - 1);

    return {
        monthlyPayment: isNaN(monthlyPayment) ? 0 : monthlyPayment,
        formatted: formatCurrency(monthlyPayment)
    };
}

// Expor função globalmente para uso em cards
window.quickCalculate = quickCalculate;

// ============================================
// TOOLTIPS INFORMATIVOS
// ============================================
const infoTooltips = {
    taxa: 'Taxa de juros média praticada no mercado brasileiro para financiamento imobiliário.',
    prazo: 'Período máximo para financiamento é de 30 anos (360 meses).',
    entrada: 'Recomenda-se dar uma entrada de pelo menos 20% do valor do imóvel.',
    mcmv: 'Minha Casa Minha Vida: Para rendas de R$ 2.000 a R$ 8.000 com imóveis até R$ 350.000.'
};

// ============================================
// COMPARADOR DE CENÁRIOS
// ============================================
function compareScenarios(propertyValue) {
    const scenarios = [
        { down: 0.10, years: 30 },
        { down: 0.20, years: 25 },
        { down: 0.30, years: 20 }
    ];

    const comparisons = scenarios.map(scenario => {
        const downPayment = propertyValue * scenario.down;
        const result = quickCalculate(propertyValue, downPayment, scenario.years);

        return {
            downPercent: scenario.down * 100,
            downValue: downPayment,
            years: scenario.years,
            monthlyPayment: result.monthlyPayment,
            totalPaid: result.monthlyPayment * scenario.years * 12
        };
    });

    return comparisons;
}

// Expor função globalmente
window.compareScenarios = compareScenarios;

// ============================================
// SALVAR SIMULAÇÃO (localStorage)
// ============================================
function saveSimulation(data) {
    const simulations = JSON.parse(localStorage.getItem('simulations') || '[]');
    simulations.push({
        ...data,
        date: new Date().toISOString()
    });

    // Manter apenas últimas 10 simulações
    if (simulations.length > 10) {
        simulations.shift();
    }

    localStorage.setItem('simulations', JSON.stringify(simulations));
}

function getSimulations() {
    return JSON.parse(localStorage.getItem('simulations') || '[]');
}

window.saveSimulation = saveSimulation;
window.getSimulations = getSimulations;
