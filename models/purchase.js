const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var purchaseSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  products: { type: {} },
  comment: {  type: String }
}, {timestamps: true});

module.exports = mongoose.model("Purchase", purchaseSchema);
