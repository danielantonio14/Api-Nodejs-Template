require('dotenv').config()

const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

const notMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');


//middleware
app.use(express.json())
app.use(notMiddleware)
app.use(errorMiddleware)


// Rota padrão
app.get('/', (req, res) => {
    res.send('<h1> Store API</h1><a href="#">Acess este Link para Teste </a>');
});


// Iniciando o servidor
const start = async (req, res) => {
    try {
        app.listen(port, () => {
            console.log(`Servidor está rodando em http://localhost:${port}`);
        });
    }
    catch (error) {
        console.log(err)
    }
}

