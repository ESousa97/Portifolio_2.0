// Definindo a função applyTextEffects globalmente
function applyTextEffects() {
    const fraseElement = document.getElementById('Frase');
    if (!fraseElement) return; // Garante que o elemento existe antes de prosseguir

    const words = fraseElement.innerText.split(' ');
    let newText = '';

    // Envolve cada letra em um span, mas mantém as palavras inteiras para quebras de linha adequadas
    words.forEach((word, index) => {
        let wordSpans = '<span class="word">'; // Inicia um novo span para a palavra
        for (let i = 0; i < word.length; i++) {
            wordSpans += `<span class="letter">${word[i]}</span>`; // Envolva cada letra em um span
        }
        wordSpans += '</span>'; // Fecha o span da palavra
        newText += wordSpans;
        if (index < words.length - 1) {
            newText += ' '; // Adiciona espaço entre as palavras
        }
    });

    fraseElement.innerHTML = newText;

    // Seleciona todos os spans de letra
    const letterSpans = fraseElement.querySelectorAll('.letter');

    // Adiciona eventos de mouseover e mouseout para o efeito de hover
    letterSpans.forEach(span => {
        span.addEventListener('mouseover', function() {
            this.classList.add('hovered');
        });

        span.addEventListener('mouseout', function() {
            this.classList.remove('hovered');
        });
    });
}

// Torna applyTextEffects acessível globalmente ao atribuir ao objeto window
window.applyTextEffects = applyTextEffects;

// Aplica os efeitos assim que o DOM estiver completamente carregado
document.addEventListener('DOMContentLoaded', function () {
    applyTextEffects();  // Chama a função para aplicar os efeitos inicialmente
});
