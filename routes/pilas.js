var express = require('express');
var router = express.Router();
var cloudinaryConfig = require('../config/cloudinaryCong.json')
var Cloudinary = require('cloudinary');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' })
Cloudinary.config(cloudinaryConfig);

const pila = require('../models/pila');

// READ ALL
router.get('/pilas',function(req,res){
    pila.find({},function(err,response){
      if(err) res.status(500).json(err);
      res.status(200).json(response);
    })
});

// READ BY TYPE
router.get('/pilas/:type',(req,res,next)=>{
    pila.find({type:req.params.type},function(err,result){
      if(err) res.status(500).json(err);
      res.status(200).json(result); 
    })
})

// READ ACTIVES
router.get('/pilas/actives',(req,res,next)=>{
  pila.find({active:true},function(err,response){
    if(err) res.status(500).json(err);
    res.status(200).json(response);
  })
})

// CREATE
router.post('/pilas', upload.single('images') ,(req,res)=>{

    Cloudinary.v2.uploader.upload(req.file.path, function(err,result) { 
      if(err) res.status(500).json(err);

<<<<<<< HEAD
      var nuevaPila = pila({
        type: req.body.type,
        subtype: req.body.subtype,
        code: req.body.code,
        model: req.body.model,
        brand: req.body.brand,
        origin: req.body.origin,
        description: req.body.description,
        price_dolar: req.body.price_dolar,
        price_args: req.body.price_args,
        active: true,
        imgurl: result.url    
      });

      nuevaPila.save(function(err,response){
=======
// UPDATE
router.put('/pilas/:_id',upload.single('images'),(req,res)=>{  
    // UPDATE DE IMG URL EN EL SERVIDOR DE IMAGENES
    const img = "";
    const oldimgUrl = pila.find({_id : id },{imgUrl:1 , _id:0});
    if(oldimgUrl != req.params.imgUrl){
      Cloudinary.v2.uploader.upload(req.file.path,(err,result)=>{
>>>>>>> 7143390805e55fe57e9be500524a7a6253b03deb
        if(err) res.status(500).json(err);
        res.status(200).json(response);
      })
    })    
});

// UPDATE
router.put('/pilas/:code',upload.single('images'),(req,res)=>{  
  Cloudinary.v2.uploader.upload(req.file.path,(err,result)=>{
    if(err) res.status(500).json(err);

    var nuevaPila = new pila({
      type: req.params.type,
      subtype: req.params.subtype,
      code: req.params.code,
      model: req.params.model,
      brand: req.params.brand,
      origin: req.params.origin,
      description: req.params.description,
      price_dolar: req.params.price_dolar,
      price_args: req.params.price_args,
      active: req.params.active,
      imgurl: result.url
    });

    pila.findByIdAndRemove(req.params.code,function(err,response){
      if(err) res.status(500).json(err);
    })
    nuevaPila.save(function(err,response){
      if(err) res.status(500).json(err);
      res.status(200).json(response);
    })
   /* pila.findByIdAndUpdate(req.params._id, {$set:nuevaPila}, function(err, response) {
      if(err) res.status(500).json(err);
      res.status(200).json(response);
    });*/
  })         
})

module.exports = router;