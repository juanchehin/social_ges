const Usuarios = require('../models/Usuarios');

const Twit = require('twit');
require('dotenv').config()

exports.login = (req, res) => {
    email: req.body.email;
    pass: req.body.password;

    // Consulta BD

}

exports.logout = (req, res) => {
    // ...
}