const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Definir onde os arquivos estáticos serão servidos
app.use(express.static(path.join(__dirname, '..', 'public')));

// Rota principal que serve a página inicial
app.get('/', (req, res) => {
    // Corrigindo o caminho para alcançar a pasta views a partir de src
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

// Inicia o servidor na porta especificada
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
