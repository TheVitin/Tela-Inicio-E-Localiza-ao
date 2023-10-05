const express = require('express');
const app = express();
const port = 8008; // Porta em que o servidor será executado
// Rota para exibir a página HTML
app.get('/', (req, res) => {
res.sendFile(__dirname + '/Localização.html');

});

app.get('/Localização.css', (req,res) => {
res.sendFile(__dirname + '/LOcalização.css')

});
// Iniciar o servidor
app.listen(port, () => {
console.log(`Servidor Express está rodando na porta ${port}`);
});

app.get('/Localização.js', (req,res) => {
res.sendFile(__dirname + '/Localização.js')

});
