var express = require('express');
var router = express.Router();
const malla = require('../models/malla')

// get all
router.get('/mallas', (req, res,next) => { 
  malla.find({},function(err,mallas){
    if(err){
      res.send(err)
    }
    res.json(mallas);
  });
})

// get by type
router.get('/mallas/:type',(req,res,next)=> {
  const type = req.params.type
  malla.find({type: type},function(err,mallas){
    if(err)
      res.send(err);
    res.json(mallas);
  })
})

// get by id
// LE AGREGUE ESE "i" en la route xq se me confundia con el de arriba
router.get('/mallasi/:_id',(req,res)=> {
  malla.findById(req.params._id,function(err,mallas){
    if(err)
      res.send(err);
    res.json(mallas);
  })
})

module.exports = router;
