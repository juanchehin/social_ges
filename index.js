const express = require('express');
const routes = require('./routes');
const path = require('path');

// Importar variables
require('dotenv').config({ path: 'variables.env' })

index = require('./routes/index'); // Mio

// Helpers con algunas funciones
const helpers = require('./helpers');

// Crear la conexion a la BD
const db = require('./config/db');
const { resolve } = require('path');

// Importo el modelo
require('./models/Usuarios');

// db.sync()
//     .then(() => console.log('Conectado al Servidor'))
//     .catch(error => console.log(error));

// Crear una app de express
const app = express();

// Archivos estaticos
app.use(express.static('public'));

//
app.use(express.urlencoded({ extended: true }));


// Carpeta de las vistas
app.set('views', path.join(__dirname, './views'));

app.use('/', index);


// Servidor y puerto
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port, '0.0.0.0', () => {
    console.log('El servidor esta funcionando');
});