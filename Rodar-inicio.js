const express = require('express');
const app = express();
const port = 8008; // Porta em que o servidor será executado
// Rota para exibir a página HTML
app.get('/', (req, res) => {
res.sendFile(__dirname + '/Tela-inicio.html');

});

app.get('/Tela-inicio.css', (req,res) => {
res.sendFile(__dirname + '/Tela-inicio.css')

});
// Iniciar o servidor
app.listen(port, () => {
console.log(`Servidor Express está rodando na porta ${port}`);
});

app.get('/Tela-inicio.js', (req,res) => {
res.sendFile(__dirname + '/Tela-inicio.js')

});
