var SpotifyWebApi = require('spotify-web-api-node');
require('dotenv').config()

// credentials are optional
var spotifyApi = new SpotifyWebApi({
    clientId: process.env.CLIENT_ID_SPOTIFY,
    clientSecret: process.env.CLIENT_SECRET_SPOTIFY,
    redirectUri: 'http://localhost:3000'
});

spotifyApi.setAccessToken('BQDqQiozEcUD5Zetyp-GH3qxBfW4veBqcm6Tp7WkUl2gIeOcRAr7bEup_Npdcf0uj7blZvUL9IzlaXlRcKI');

exports.listarNovedades = (req, res) => {
    spotifyApi.getNewReleases({ limit: 5, offset: 0, country: 'AR' })
        .then(function(data) {
            return res.json(data.body);
        }, function(err) {
            console.log("Something went wrong!", err);
        });

}

exports.obtenerCanciones = (req, res) => {
    spotifyApi.searchTracks(req.params.cancion)
        .then(function(data) {
            // console.log('Search by "Love"', data.body.tracks.items);
            return res.json(data.body);
        }, function(err) {
            console.error(err);
        });
}