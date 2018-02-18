var express = require('express');
var router = express.Router();
const Reloj = require('../models/reloj')

/* GET home page. */
router.get('/product', function(req, res, next) {

  Reloj.find({}, (err, data) => {
    if (err) 
      console.log(err);

    res.json(data);
  })
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
