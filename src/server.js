const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Definir o mecanismo de visualização para usar EJS
app.set('view engine', 'ejs');

// Servir arquivos estáticos. O path.join garantirá o caminho correto
app.use(express.static(path.join(__dirname, '..', 'public')));

// Rota principal que renderiza a página inicial
app.get('/', (req, res) => {
    res.render('index');  // Supõe-se que existe um arquivo 'index.ejs' na pasta 'views'
});

// Inicia o servidor na porta especificada
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
