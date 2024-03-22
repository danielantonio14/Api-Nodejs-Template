require('dotenv').config()
const express = require('express');

const app = express();
const port = 3000;


const port = process.env.port || 3000;
// Rota padrão
app.get('/', (req, res) => {
    res.send('<h1> Store API</h1><a href="#">Acess este Link para Teste </a>');
});

const notMiddleware = require('middleware/not-found');
const errorMiddleware = require('middleware/error-handler');



// Iniciando o servidor

const  start = async (req, res, next)=>{
    
    try {
        app.listen(port, () => {
            console.log(`Servidor está rodando em http://localhost:${port}`);
        });
    }
    
    catch (eror) {
        console.log(eror);
    }
    
}

start()


