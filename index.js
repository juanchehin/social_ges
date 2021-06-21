const express = require('express');
const routes = require('./routes');
const path = require('path');
const passport = require('./config/passport');
const flash = require('connect-flash');
const session = require('express-session');


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
//     .then(() => console.log('Conectado al Servidor MySQL'))
//     .catch(error => console.log(error));


// Archivos estaticos
app.use(express.static('public'));

// Para usar el cuerpo de la peticion (body)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set the view engine to ejs
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

// ************* PASSPORT *************
app.use(session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
// app.use(flash());
// ************* FIN PASSPORT *************


app.use('/', index);


// Servidor y puerto
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port, '0.0.0.0', () => {
    console.log('El servidor esta funcionando');
});