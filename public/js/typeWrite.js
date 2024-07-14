const texts = [
"Olá, sou José Enoque",
"Sou desenvolvedor full stack.",
"Fico feliz em tê-lo aqui e espero que encontre exatamente o que procura! :)"
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function updateText() {
    const typewriterText = document.getElementById('typewriter-text');
    typewriterText.innerHTML = texts[textIndex].substring(0, charIndex);
}

function typeEffect() {
    const typewriterText = document.getElementById('typewriter-text');
    let typingSpeed = 100;

    if (isDeleting) {
        typingSpeed = 50;  // Speed up when deleting
        charIndex--;
    } else {
        charIndex++;
    }

    updateText();

    // If text is fully typed out
    if (!isDeleting && charIndex === texts[textIndex].length) {
        typingSpeed = 2000;  // Pause before start deleting
        isDeleting = true;
    } 
    // If text is fully deleted
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;  // Move to the next text
        typingSpeed = 500;  // Pause before start typing
    }

    setTimeout(typeEffect, typingSpeed);
}

document.addEventListener('DOMContentLoaded', () => {
    const typewriterText = document.getElementById('typewriter-text');
    typewriterText.classList.add('hidden-text');  // Ensure text is hidden initially
    setTimeout(() => {
        typewriterText.classList.remove('hidden-text');  // Make text visible
        typewriterText.classList.add('visible-text');
        typeEffect();  // Start typing
    }, 0);  // Start immediately
});
