require('dotenv').config();

const express= require('express');
const app = express()


const notFoundMiddeware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

//middleware
app.use(express.json())
app.use(notFoundMiddeware)
app.use(errorHandlerMiddleware)

//routes
app.get('/',(req, res, next) =>{
    res.send('<h1> Store API</h1> <a href="/api/v1/products">products route</a>')
})






