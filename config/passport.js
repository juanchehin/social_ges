var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

// Referencia al Modelo donde vamos a autenticar
const Usuarios = require('../models/Usuarios');

passport.use(new LocalStrategy(
    function(username, password, done) {
        console.log('passa 1111');
        console.log('passa username', username);
        console.log('passa password', password);
        // User.findOne({ username: username }, function(err, user) {
        //     if (err) { return done(err); }
        //     if (!user) {
        //         return done(null, false, { message: 'Incorrect username.' });
        //     }
        //     if (!user.validPassword(password)) {
        //         return done(null, false, { message: 'Incorrect password.' });
        //     }
        //     return done(null, user);
        // });
    }
));
// 'local' strategy - Login con credenciales propios (usuario y password)
// passport.use(
//     new LocalStrategy(
//         // por default passport espera un usuario y password
//         {
//             usernameField: 'email',
//             passwordField: 'password'
//         },
//         async(email, password, done) => {
//             console.log('passa 1111');
//             try {
//                 const usuario = await Usuarios.findOne({
//                     where: {
//                         email,
//                         activo: 1
//                     }
//                 });

//                 // El usuario existe, password incorrecto
//                 if (!usuario.verificarPassword(password)) {
//                     return done(null, false, {
//                         message: 'Password Incorrecto'
//                     })
//                 }
//                 // El email existe, y el password correcto
//                 console.log('usuario en passport.js -> linea 31 es :', usuario);
//                 return done(null, usuario);
//             } catch (error) {
//                 // Ese usuario no existe
//                 console.log('passa 2222');

//                 return done(null, false, {
//                     message: 'Esa cuenta no existe'
//                 })
//             }
//         }
//     )
// );

// serializar el usuario
// passport.serializeUser((usuario, callback) => {
//     callback(null, usuario);
// });

// // deserializar el usuario
// passport.deserializeUser((usuario, callback) => {
//     callback(null, usuario);
// });

// exportar
module.exports = passport;