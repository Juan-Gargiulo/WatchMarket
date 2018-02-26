import { Stream } from 'stream';

const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MallaSchema = new Schema({
  type: String ,
  subtype: String,
  code: String,
  length: Number,
  color: String,
  origin: String,
  description: String,
  Price_Dolar: Number,
  Price_Args: Number,
  cantidad:Number,
  baja:Boolean,
  imgUrl: String
});

var Malla = mongoose.model('mallas', MallaSchema);

// make this available to our users in our Node applications
module.exports = Malla;
