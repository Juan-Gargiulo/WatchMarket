var mongoose = require('mongoose');
var url ="mongodb://admin:1234@ds245548.mlab.com:45548/watchmarket";
console.log(NODE_ENV);
console.log(process.env.MONGODB_URI);
mongoose.connect(url);
// si lo igualo a la variable de entorno , me tira un error que me dice que "url debe ser un string , hay q buscarle la vuelta a esa gilada"