const express = require('express');
const router = express.Router();


// Importar el controlador
const twitterController = require('../controllers/twitterController');
const homeController = require('../controllers/homeController');
const facebookController = require('../controllers/facebookController');
const authController = require('../controllers/authController');


// Ruta principal para login
router.get('/',
    homeController.home
);

router.get('/tweets/:search',
    twitterController.buscarTweets
);

router.post('/twitter/newtweet',
    twitterController.publicar
);


module.exports = router;