var mongoose = require('mongoose');
var url = process.env.MONGODB_URI;
mongoose.connect(url);