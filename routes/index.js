var express = require('express');
var router = express.Router();
//const Reloj = require('../models/reloj')


router.get('/', function(req, res, next) {

  /*   Reloj.find({}, (err, data) => {
      if (err) 
        console.log(err);
  
      }) */
      res.json([{"_id":"5a84b080fcd83e2ee718418e","name":"hola","__v":0},{"_id":"5a84bedbc65ee23da6143517","name":"rolex3","__v":0}]);
});

/* GET home page. */
router.get('/product', function(req, res, next) {

/*   Reloj.find({}, (err, data) => {
    if (err) 
      console.log(err);

    }) */
    res.json([{"_id":"5a84b080fcd83e2ee718418e","name":"arta","__v":0},{"_id":"5a84bedbc65ee23da6143517","name":"rolex3","__v":0}]);
});

router.get('/createReloj', (req, res) => {

  const newReloj = Reloj({
    name: "rolex3",
    pija: "dddd"
  })

  newReloj.save((err)=>{
    if(err)
      console.log(err)

    console.log("se creo el reloj")
    res.sendStatus(200)
  });
})

module.exports = router;
