var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

// Referencia al Modelo donde vamos a autenticar
const User = require('../models/Usuarios');

passport.use(new LocalStrategy(
    async(email, password, done) => {
        try {
            console.log('entra 1');
            const usuario = await User.findOne({
                where: {
                    email,
                    enabled: 1
                }
            });
            console.log('entra 2');

            // El usuario existe, password incorrecto
            if (!usuario.verificarPassword(password)) {
                return done(null, false)
            }
            // OK - El email existe, y el password correcto
            // console.log('usuario en passport.js -> linea 31 es :', usuario);
            return done(null, true);
        } catch (error) {
            console.log('entra 4');
            // Ese usuario no existe
            return done(null, false)
        }
    }
));

// serializar el usuario
passport.serializeUser((User, callback) => {
    callback(null, User);
});

// deserializar el usuario
passport.deserializeUser((User, callback) => {
    callback(null, User);
});

// exportar
module.exports = passport;