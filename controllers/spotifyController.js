var SpotifyWebApi = require('spotify-web-api-node');
require('dotenv').config()
const axios = require('axios')
var qs = require('qs');

var token = 'BQDqQiozEcUD5Zetyp-GH3qxBfW4veBqcm6Tp7WkUl2gIeOcRAr7bEup_Npdcf0uj7blZvUL9IzlaXlRcKI';


// credentials are optional
var spotifyApi = new SpotifyWebApi({
    clientId: process.env.CLIENT_ID_SPOTIFY,
    clientSecret: process.env.CLIENT_SECRET_SPOTIFY,
    redirectUri: 'http://localhost:3000'
});

spotifyApi.setAccessToken(token);

exports.listarNovedades = (req, res) => {
    spotifyApi.getNewReleases({ limit: 5, offset: 0, country: 'AR' })
        .then(function(data) {
            console.log('data es 1 : ', data);
            return res.json(data.body);
        }, async function(err) {
            console.log("Something went wrong!", err.statusCode);

            if (err.statusCode = 401) {
                console.log("Entra codigo 401");

                this.token = await dameTokenSpotify();

                console.log("this.token : ", this.token);


                // spotifyApi.setAccessToken(this.token);
            }
            console.log("Something went wrong!", err);
        });
    return;
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

async function dameTokenSpotify() {
    console.log('entra dameTokenSpotify');

    var data = qs.stringify({
        'grant_type': 'client_credentials',
        'client_id': process.env.CLIENT_ID_SPOTIFY,
        'client_secret': process.env.CLIENT_SECRET_SPOTIFY
    });
    console.log('entra dameTokenSpotify 1');

    var config = {
        method: 'post',
        url: 'https://accounts.spotify.com/api/token',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Cookie': '__Host-device_id=AQBda3oIJgC_zq5LgFqGh9f6oQdenputghP57Dl4HctT-4mmMPxAilBzICbbtr8rTlvu6R8ibnQQ1Av0ZryvUyJ6kpqXqKZHI_E'
        },
        data: data
    };
    console.log('entra dameTokenSpotify 2');

    var respuestaAxios = await axios(config)
        .then(function(response) {
            console.log('response es : = ', JSON.stringify(response.data));
            this.token = response.data.access_token;
        })
        .catch(function(error) {
            console.log('error en axios es : ', error);
        });
    console.log('entra dameTokenSpotif 3 : ', respuestaAxios);

    console.log('entra dameTokenSpotif 4 this.token : ', this.token);

    spotifyApi.setAccessToken(this.token);
    // Listar novedades

}