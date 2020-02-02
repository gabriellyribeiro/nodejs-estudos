const express = require("express");
const getGaby = require('./routes/gabyRoute')
const app = express();
const port = 3000;

//requisição - é o cliente pede
//resposta  - é a resposta que eu envio

app.get('/gaby', getGaby)
app.get('/gabrielly', getGaby)
    // app.get('/gaby', (req, res) => res.send('Olá mundo EXPRESS'))
    //app.get('/gaby', (req, res) => res.json({
    //  mensagem: 'olá mundo'
    //}))   exemplo que aprendi com o alex
app.listen(port, () => console.log("API rodando na porta 3000"));