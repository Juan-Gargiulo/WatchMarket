var express = require('express');
var router = express.Router();
const pila = require('../models/pila');


router.get('/pilas',function(req,res){
    pila.find({},function(err,pilas){
        if(err){
            res.send(err)
          }
          res.json(pilas);
    })
});
// get by type
router.get('/pilas/:type',(req,res,next)=>{
    pila.find({"type":req.params.type},function(err,pilas){
        if(err){
            res.send(err);
        }
        res.json(pilas);
    })
})
module.exports = router;