const Usuarios = require('../models/Usuarios');

const Twit = require('twit');
require('dotenv').config()

const T = new Twit({
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
    access_token: process.env.access_token,
    access_token_secret: process.env.access_token_secret,
})


exports.buscarTweets = (req, res) => {
    T.get('search/tweets', { q: req.params.search, count: 5 },
        function(err, data, response) {
            res.json(data);
        })

}