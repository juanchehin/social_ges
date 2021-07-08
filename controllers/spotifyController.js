var SpotifyWebApi = require('spotify-web-api-node');
require('dotenv').config()

// credentials are optional
var spotifyApi = new SpotifyWebApi({
    clientId: process.env.CLIENT_ID_SPOTIFY,
    clientSecret: process.env.CLIENT_SECRET_SPOTIFY,
    redirectUri: 'http://localhost:3000'
});

spotifyApi.setAccessToken('BQAOgat9AKtCYmOyXg-0Y60t3pD_TxE5UsFNc6C_uzc08CZ625Cg3af1JwAk69sZhrWg7z-yn8GIjRbG4Tw');

exports.listarNovedades = (req, res) => {
    spotifyApi.getNewReleases({ limit: 5, offset: 0, country: 'AR' })
        .then(function(data) {
            console.log('data body es : ', data.body);
            // done();
            return;
        }, function(err) {
            console.log("Something went wrong!", err);
        });
}