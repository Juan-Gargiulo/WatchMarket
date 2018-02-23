var express = require('express');
var router = express.Router();
const malla = require('../models/malla')

// get all
router.get('/mallas', (req, res,next) => { 
  console.log("var:", process.env.MONGODB_URI);
  malla.find({},function(err,mallas){
    if(err){
      res.send(err)
    }
    res.json(mallas);
  });
})

// get by type
router.get('/mallas/:type',(req,res,next)=> {
  malla.find({"type":req.params.type},function(err,mallas){
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

router.post('/mallasp',(req,res)=>{


  const m = new malla({
    type: "aaa",
  })
  m.save((err,updatedm)=>{
    if(err) console.log(err)
    res.send(updatedm)
  })

})
module.exports = router;
