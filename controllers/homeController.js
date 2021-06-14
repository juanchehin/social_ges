const Usuarios = require('../models/Usuarios');

console.log('entra en route');
exports.home = (req, res) => {
    // res.sendFile('index.html', { root: './views' });
    res.render('pages/index');
}