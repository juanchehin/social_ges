const axios = require('axios');

exports.listar = () => {
    // Make a request for a user with a given ID
    axios.get('https://blogger.googleapis.com/v3/blogs/679124141950031513?maxPosts=1&view=VIEW_TYPE_UNSPECIFIED&key=AIzaSyBUwmENvyOHQgN3p7iYKeYFlXxiPkywjMI&')
        .then(function(response) {
            // handle success
            console.log('response es : ', response);
        })
        .catch(function(error) {
            // handle error
            console.log('error es : ', error);
        })
        .then(function() {
            // always executed
            console.log('entra 2d0 then');
        });

}