const express = require('express');
const routes = require('./routes');
const path = require('path');

// Importar variables
require('dotenv').config({ path: 'variables.env' })

index = require('./routes/index'); // Mio


// Crear una app de express
const app = express();

// Crear la conexion a la BD
const db = require('./config/db');
const { resolve } = require('path');

// Importo el modelo
require('./models/Usuarios');

// db.sync()
//     .then(() => console.log('Conectado al Servidor'))
//     .catch(error => console.log(error));


// Archivos estaticos
app.use(express.static('public'));

//
app.use(express.urlencoded({ extended: true }));


// set the view engine to ejs
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use('/', index);


// Servidor y puerto
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port, '0.0.0.0', () => {
    console.log('El servidor esta funcionando');
});