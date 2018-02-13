const mongoose = require('mongoose');

var Schema = mongoose.Schema;

// create a schema
var RelojSchema = new Schema({
  name: String,
});

// the schema is useless so far
// we need to create a model using it
var Reloj = mongoose.model('Reloj', RelojSchema);

// make this available to our users in our Node applications
module.exports = Reloj;