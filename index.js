const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const produtos = require('./produtos');

app.use(cors());
app.use(express.json());
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));

app.get('/produtos', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/produtos', (req, res) => {
    res.send(produtos);
});

app.get('/api/produtos/:id', (req, res) => {
    const produto = produtos.find(p => p.id === parseInt(req.params.id));
    if (!produto) res.status(404).send('Produto não encontrado');
    res.send(produto);
});

app.get('/txt', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'txt.html'));
});

app.get('/api/txt', (req, res) => {
    res.sendFile('matriz.txt', { root: path.join(__dirname, 'public') });
});


app.listen(3000, () => console.log('Server running on port 3000'));
