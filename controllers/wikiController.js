const wiki = require('wikijs').default;

exports.obtenerArticulos = async(req, res) => {

    console.log('entra obtenerArticulos : ', req.params.searchWiki);
    data = await wiki()
        .page(req.params.searchWiki)
        .then(page => page.summary());
    // .then(console.log);
    console.log('data es : ', data);
    res.json(data);
}

exports.publicar = () => {

}