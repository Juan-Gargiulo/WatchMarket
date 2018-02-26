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
    Price_Dolar: Number,
    Price_Args: Number,
    cantidad:Number,
    baja:Boolean,
    imgUrl: String
})

var Pila = mongoose.model('Pila',PilaSchema);

module.exports = Pila;