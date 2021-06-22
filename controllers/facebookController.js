var FB = require('fb');
require('dotenv').config()

var accessToken;

// Falta validar permisos en FB
exports.publicar = (req, res) => {
    console.log('req es : ', req.body);

    FB.setAccessToken(this.accessToken);
    FB.api(
        '/674669636369737/feed', // Poner aqui la credencial del .env
        'POST', { "message": req.body.texto },
        function(response) {
            obtenerToken();
            console.log(response);
        }
    );
}

function obtenerToken() {
    FB.api('oauth/access_token', {
        client_id: process.env.APP_ID_FB,
        client_secret: process.env.SECRET_APP_FB,
        grant_type: 'client_credentials'
    }, function(res) {
        if (!res || res.error) {
            console.log(!res ? 'error occurred' : res.error);
            return;
        }

        this.accessToken = res.access_token;
    });

}