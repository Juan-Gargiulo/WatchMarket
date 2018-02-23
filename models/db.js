var mongoose = require('mongoose');
console.log("aaa" + process.env.MONGOLAB_URI);
var url = process.env.MONGODB_URI;
mongoose.connect(url);