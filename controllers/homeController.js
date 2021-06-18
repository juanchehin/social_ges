const Usuarios = require('../models/Usuarios');

exports.home = (req, res) => {
    res.render('partials/login');
}