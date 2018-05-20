const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var purchaseSchema = new Schema({
  buyer: { type: Schema.Types.ObjectId, ref: 'User' },
  mallas: [{ type: Schema.Types.ObjectId, ref: 'mallas' }],
  pilas: [{ type: Schema.Types.ObjectId, ref: 'Pila' }],
  comment: {  type: String }
}, {timestamps: true});

module.exports = mongoose.model("Purchase", purchaseSchema);
