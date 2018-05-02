const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var MallaSchema = new Schema({
  type: String,
  subtype: String,
  code: String,

  length: Number,
  color: String,

  origin: String,
  description: String,
  price_dolar: Number,
  price_args: Number,
  active: Boolean,
  imgurl: String
});

var Malla = mongoose.model("mallas", MallaSchema);

// make this available to our users in our Node applications
module.exports = Malla;
