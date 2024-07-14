// Função para adicionar animação quando o elemento entra na viewport
const addAnimation = (element, animation) => {
    if (!element.classList.contains('animate__animated')) {
        element.classList.add('animate__animated', animation);
        element.addEventListener('animationend', () => {
            element.classList.remove('animate__animated', animation);
        });
    }
};

// Observador de interseção para detectar quando os elementos entram na viewport
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const element = entry.target;
        const animation = element.getAttribute('data-animation');
        if (entry.isIntersecting) {
            addAnimation(element, animation);
        }
    });
}, { threshold: [0.1] });  // Ajuste o limiar conforme necessário para uma resposta mais sensível ou menos sensível

// Adiciona o observador aos elementos que devem ser animados
document.querySelectorAll('[data-animation]').forEach(element => {
    observer.observe(element);
});