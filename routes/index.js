const express = require('express');
const router = express.Router();

// Importar express validator
const { body } = require('express-validator/check');

// Importar el controlador
const proyectosController = require('../controllers/proyectosController');
const tareasController = require('../controllers/tareasController');
const twitterController = require('../controllers/twitterController');
const homeController = require('../controllers/homeController');


// Ruta para el home
router.get('/',
    homeController.home
);

router.get('/tweets/:search',
    twitterController.buscarTweets
);

router.post('/facebook/:comment',
    facebookController.publicar
);



module.exports = router;