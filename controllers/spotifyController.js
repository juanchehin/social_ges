var SpotifyWebApi = require('spotify-web-api-node');
require('dotenv').config()

// credentials are optional
var spotifyApi = new SpotifyWebApi({
    clientId: process.env.CLIENT_ID_SPOTIFY,
    clientSecret: process.env.CLIENT_SECRET_SPOTIFY,
    redirectUri: 'http://localhost:3000'
});

spotifyApi.setAccessToken('BQAhDLxi3A1OoQ4pvwCezQZyB1CcVO-cwImigjjrOyWL8aS6boVk8_DTDyR3QgUVIJ_Wg2vu9c4wHG2uID4');

exports.listarNovedades = (req, res) => {
    spotifyApi.getNewReleases({ limit: 5, offset: 0, country: 'AR' })
        .then(function(data) {
            console.log('data body es : ', data.body);
            return res.json(data.body);
        }, function(err) {
            console.log("Something went wrong!", err);
        });

}