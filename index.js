'use strict'
const express = require('express');
const dnsPrefetchControl = require('dns-prefetch-control')

const { multiplicar, suma } = require('./functions.js');
const app = express();
const port = 3001;

app.use(dnsPrefetchControl({ allow: true }))
app.use( express.json() )
app.get('/', (req, res ) => {
    res.status(200).send({
        estatus: 'ok',
        code: 200
    })
})

app.get('/suma', ( req, res) => {
    
    try {
        const resultado = suma( req.query.a, req.query.b );
        console.log('resultado: ', resultado)
        return res.status(200).send({
            estatus: true,
            code: 200,
            operacion: 'Suma',
            resultado: resultado
        })
    } catch (error) {
        console.log('error: ', error)

        return res.status(400).send({
            estatus: true,
            code: 400,
            operacion: 'Suma: Por favor ponga parámetros válidos',
        })
    }
    

    
})

app.get('/multiplicar', ( req, res) => {
    
    try {
        const resultado = multiplicar( req.query.a, req.query.b );
        
        return res.status(200).send({
            estatus: true,
            code: 200,
            operacion: 'Multiplicar',
            resultado: resultado
        })
    } catch (error) {
        return res.status(400).send({
            estatus: true,
            code: 400,
            operacion: 'Multiplicar: Por favor ponga parámetros válidos',
        })
    }

    
})

app.listen( port, ()=> {
    console.log('Servidor corriendo en ', 'http://localhost:' + port );
})