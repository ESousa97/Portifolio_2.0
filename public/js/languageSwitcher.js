class LanguageSwitcher {
    constructor() {
        this.currentLanguage = localStorage.getItem('preferredLanguage') || 'pt';  // Carrega o idioma do localStorage ou padrão para 'pt'
        this.initElements();
        this.initListeners();
        this.applyLanguageSettings();  // Aplica o idioma salvo ou o padrão ao inicializar
    }

    initElements() {
        this.langToggle = document.getElementById('lang-toggle');  // Botão de alternância de idioma
        this.flagIcon = document.getElementById('flag-icon');  // Ícone de bandeira
        this.themeSwitcher = document.getElementById('theme-switcher');  // Alternador de tema
    }

    initListeners() {
        this.langToggle.addEventListener('click', () => {
            const newLang = this.currentLanguage === 'pt' ? 'en' : 'pt';  // Alterna o idioma
            this.switchLanguage(newLang);  // Muda o idioma
        });
    }

    switchLanguage(lang) {
        this.currentLanguage = lang;
        localStorage.setItem('preferredLanguage', this.currentLanguage);  // Salva o idioma no localStorage
        this.applyLanguageSettings();  // Aplica as configurações do idioma
    }

    applyLanguageSettings() {
        this.updateTexts();  // Atualiza todos os textos baseados no idioma
        this.updateFlagIcon();  // Atualiza o ícone da bandeira
        this.updateThemeSwitcherTitle();
        changeLanguage(this.currentLanguage);  // Atualiza o título do alternador de tema
        if (window.applyTextEffects) {
            window.applyTextEffects();  // Reaplica os efeitos de texto se existirem
        }
    }

    updateTexts() {
        document.querySelectorAll("[data-pt], [data-en]").forEach(el => {
            el.innerText = el.getAttribute(`data-${this.currentLanguage}`);  // Atualiza os elementos com texto baseado no idioma
        });
    }

    updateFlagIcon() {
        if (this.currentLanguage === 'pt') {
            this.flagIcon.src = '/images/brazil.svg';
            this.flagIcon.alt = 'Bandeira dos Estados Unidos';
            this.langToggle.title = 'Change to English';  // Atualiza o título para inglês
        } else {
            this.flagIcon.src = '/images/usa.svg';
            this.flagIcon.alt = 'Bandeira do Brasil';
            this.langToggle.title = 'Mudar para Português';  // Atualiza o título para português
        }
    }

    updateThemeSwitcherTitle() {
        if (this.currentLanguage === 'pt') {
            this.themeSwitcher.title = 'Alternar tema';  // Texto em inglês
        } else {
            this.themeSwitcher.title = 'Change theme';  // Texto em português
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new LanguageSwitcher();  // Instancia a classe quando o DOM estiver carregado
});
