const Usuarios = require('../models/Usuarios');

exports.login = (req, res) => {
    res.render('partials/login');
}

exports.dashboard = (req, res) => {
    res.render('pages/index');
}