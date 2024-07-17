const texts = {
    pt: [
        "Olá, sou José Enoque",
        "Sou desenvolvedor full stack.",
        "Fico feliz em tê-lo aqui, espero que encontre exatamente o que procura! :)"
    ],
    en: [
        "Hello, I'm José Enoque",
        "I'm a full stack developer.",
        "I'm glad to have you here, I hope you find exactly what you're looking for! :)"
    ]
};

let currentLanguage = 'pt'; // Define o idioma inicial como português
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let timeoutHandle; // Variável para guardar a referência do timeout

function getRandomSpeed(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function updateText() {
    const typewriterText = document.getElementById('typewriter-text');
    typewriterText.innerHTML = texts[currentLanguage][textIndex].substring(0, charIndex);
}

function typeEffect() {
    const typewriterText = document.getElementById('typewriter-text');
    let typingSpeed = isDeleting ? getRandomSpeed(30, 75) : getRandomSpeed(100, 180);

    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    updateText();

    if (timeoutHandle) {
        clearTimeout(timeoutHandle);
    }

    if (!isDeleting && charIndex === texts[currentLanguage][textIndex].length) {
        timeoutHandle = setTimeout(() => {
            isDeleting = true;
            typeEffect();
        }, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts[currentLanguage].length;
        timeoutHandle = setTimeout(typeEffect, 500);
    } else {
        timeoutHandle = setTimeout(typeEffect, typingSpeed);
    }
}

function changeLanguage(lang) {
    if (timeoutHandle) {
        clearTimeout(timeoutHandle); // Limpa qualquer timeout ativo ao mudar o idioma
    }
    currentLanguage = lang;
    localStorage.setItem('currentLanguage', lang); // Salva o idioma atual no localStorage
    textIndex = 0;
    charIndex = 0;
    isDeleting = false;
    typeEffect();  // Reinicia o efeito de typewriter com o novo idioma
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('currentLanguage') || 'pt'; // Recupera o idioma salvo ou usa 'pt' como padrão
    currentLanguage = savedLanguage;
    const typewriterText = document.getElementById('typewriter-text');
    typewriterText.classList.add('hidden-text');  // Garante que o texto esteja oculto inicialmente
    setTimeout(() => {
        typewriterText.classList.remove('hidden-text');  // Torna o texto visível
        typewriterText.classList.add('visible-text');
        typeEffect();  // Começa a digitação no idioma salvo ou padrão
    }, 0);  // Começa imediatamente
});
