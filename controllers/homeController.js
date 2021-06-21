const Usuarios = require('../models/Usuarios');

let notification = false;

exports.login = (req, res) => {
    res.render('partials/login', { notification: notification });
}

exports.dashboard = (req, res) => {
    res.render('pages/index');
}