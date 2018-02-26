var express = require('express');
var router = express.Router();
const pila = require('../models/pila');

// READ ALL
router.get('/pilas',function(req,res){
    pila.find({},function(err,pilas){
        if(err){
            res.send(err)
          }
          res.json(pilas);
    })
});
// READ BY TYPE
router.get('/pilas/:type',(req,res,next)=>{
    pila.find({"type":req.params.type},function(err,pilas){
        if(err){
            res.send(err);
        }
        res.json(pilas);
    })
})
// CREATE
router.post('/pilas', upload.single('images') ,(req,res)=>{
    let body = req.body;
    body.baja = false;
    Cloudinary.v2.uploader.upload(req.file.path, function(err,result) { 
      if(err) {
        console.log(err)
      }     
      body.imgUrl = result; 
    })
    pila.create(body,(err, PilaSchema) =>{
        if (err) {
          console.log(err);
        }
    });
});
// UPDATE
router.put('/pilas/:_id',(req,res)=>{
    const id = req.params._id;
  
    // UPDATE DE IMG URL EN EL SERVIDOR DE IMAGENES
    const oldimgUrl = pilas.find({_id : id },{imgUrl:1 , _id:0});
    if(oldimgUrl != req.params.imgUrl){
      Cloudinary.v2.uploader.upload(req.file.path,(err,result)=>{
        if(err){
          console.log(err);
        }
      })
    }
  
    // UPDATE EN MONGO
    var myquery = {
      _id: id
    }
    var newValues = {
      type: req.params.type,
      subtype: req.params.subtype,
      code: req.params.code,
      model: req.params.model,
      brand: req.params.brand,
      origin: req.params.origin,
      description: req.params.description,
      Price_Dolar: req.params.Price_Dolar,
      Price_Args: req.params.Price_Args,
      cantidad: req.params.cantidad,
      baja: req.params.baja,
      imgUrl: req.params.imgUrl,
    }
    db.updateOne(myquery,newValues,(err,res)=>{
      if(err){
        console.log(err);
      }
    });
    pila.save(); 
  })
  
  // DELETE
  router.get('/pilas/:id',(req,res)=>{
    let id = req.params.id;
    pilas.findById(id,(err,pila)=>{
      if(err) {
        console.log(err);
      }
      pila.baja = true; 
      pila.save();    
    })
  })
module.exports = router;