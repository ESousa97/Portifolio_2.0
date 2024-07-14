document.addEventListener('DOMContentLoaded', function() {
    // Função para alternar o tema
    function toggleTheme() {
        const body = document.body;
        const themeIcon = document.getElementById('theme-icon');

        if (body.classList.contains('light-mode')) {
            body.classList.replace('light-mode', 'dark-mode');
            themeIcon.classList.replace('bi-moon', 'bi-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.replace('dark-mode', 'light-mode');
            themeIcon.classList.replace('bi-sun', 'bi-moon');
            localStorage.setItem('theme', 'light');
        }
    }

    // Carregar o tema salvo no localStorage
    function loadSavedTheme() {
        const themeIcon = document.getElementById('theme-icon');
        const savedTheme = localStorage.getItem('theme');

        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
            themeIcon.classList.add('bi-sun');
            themeIcon.classList.remove('bi-moon');
        } else {
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
            themeIcon.classList.add('bi-moon');
            themeIcon.classList.remove('bi-sun');
        }
    }

    // Adiciona o event listener ao botão
    const themeSwitcher = document.getElementById('theme-switcher');
    if (themeSwitcher) {
        themeSwitcher.addEventListener('click', toggleTheme);
    }

    // Carrega o tema quando a página é carregada
    loadSavedTheme();
});
