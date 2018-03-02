const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PilaSchema = new Schema({
    type: String,
    subtype: String,
    code: String,
    model: String,
    brand: String,
    origin: String,
    description: String,
    price_dolar: Number,
    price_args: Number,
    active:Boolean,
    imgurl: String
})

var Pila = mongoose.model('Pila',PilaSchema);

module.exports = Pila;