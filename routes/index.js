const express = require('express');
const router = express.Router();


// Importar el controlador
const twitterController = require('../controllers/twitterController');
const homeController = require('../controllers/homeController');
const facebookController = require('../controllers/facebookController');
const authController = require('../controllers/authController');
const wikiController = require('../controllers/wikiController');


// Ruta principal - login
router.get('/',
    homeController.login
);

// Ruta logout
router.get('/logout',
    authController.cerrarSesion
);

// Ruta POST login
router.post('/login',
    authController.login
);

// Ruta POST facebook
router.post('/facebook',
    facebookController.publicar
);

// Ruta POST wikipedia
router.post('/wikipedia',
    wikiController.publicar
);

// Ruta GET wikipedia
router.get('/wikipedia/:searchWiki',
    wikiController.obtenerArticulos
);

// Ruta dashboard 
router.get('/dashboard',
    authController.usuarioAutenticado,
    homeController.dashboard
);

router.get('/tweets/:search',
    twitterController.buscarTweets
);

router.post('/twitter/newtweet',
    twitterController.publicar
);



module.exports = router;