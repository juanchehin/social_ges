var meli = require('mercadolibre-nodejs-sdk');
require('dotenv').config()

exports.obtenerArticulos = async(req, res) => {

    console.log('entra obtenerArticulos MELI : ');
    let apiInstance = new meli.ItemsApi();
    let id = process.env.consumer_key;
    apiInstance.itemsIdGet(id, (error, data, response) => {
        if (error) {
            console.error(error);
        } else {
            console.log('API called successfully.');
        }
    });
}

exports.publicar = () => {


}