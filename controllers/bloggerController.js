const axios = require('axios');
require('dotenv').config()
    // http.get(`http://blogger.googleapis.com/v3/blogs/ ${ process.env.USER_ID } ?maxPosts=1&view=VIEW_TYPE_UNSPECIFIED&key= ${process.env.KEY_BLOGGER} `, res => {

// Lista los blogs que se publicaron
exports.listar = (req, res) => {
    // http.get("http://blogger.googleapis.com/v3/blogs/679124141950031513?maxPosts=1&view=VIEW_TYPE_UNSPECIFIED&key=AIzaSyBUwmENvyOHQgN3p7iYKeYFlXxiPkywjMI&", res => {
    axios.get('http://blogger.googleapis.com/v3/blogs/679124141950031513?maxPosts=1&view=VIEW_TYPE_UNSPECIFIED&key=AIzaSyBUwmENvyOHQgN3p7iYKeYFlXxiPkywjMI&')
        .then(function(response) {
            // handle success
            console.log('response es : ');

            console.log(response);
        })
        .catch(function(error) {
            // handle error
            console.log('error es : ');

            console.log(error);
        })
        .then(function() {
            console.log('entra 2do then : ');

            // always executed
        });
}