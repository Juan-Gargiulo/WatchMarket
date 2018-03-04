var express = require('express');
var router = express.Router();
var cloudinaryConfig = require('../config/cloudinaryCong.json')
var Cloudinary = require('cloudinary');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' })
Cloudinary.config(cloudinaryConfig);

const malla = require('../models/malla');

// READ ALL
router.get('/mallas', (req, res,next) => { 
  malla.find({},function(err,response){
    if(err) res.status(500).json(err);
    res.status(200).json(response);
  });
});

// READ BY TYPE
router.get('/mallas/:type',(req,res,next)=> {
  malla.find({type: req.params.type},function(err,response){
    if(err) res.status(500).json(err);
    res.status(200).json(response);
  })
})

router.get('/mallas/:code',(req,res,next)=> {
  malla.find({code: req.params.code},function(err,response){
    if(err) res.status(500).json(err);
    res.status(200).json(response);
  })
})

// READ ACTIVES
router.get('/mallas/actives',(req,res,next)=>{
  malla.find({active:true},function(err,response){
    if(err) res.status(500).json(err);
    res.status(200).json(response);
  })
})

// CREATE
router.post('/mallas', upload.single('images') ,(req,res)=>{

    Cloudinary.v2.uploader.upload(req.file.path, function(err,result) { 
      if(err) res.status(500).json(err);
      var nuevaMalla = malla({
        type: req.body.type,
        subtype: req.body.subtype,
        code: req.body.code,
        length: req.body.length,
        color: req.body.color,
        origin: req.body.origin,
        description: req.body.description,
        price_dolar: req.body.price_dolar,
        price_args: req.body.price_args,
        active: true,
        imgurl: result.url   
      });

      nuevaMalla.save(function(err,response){
        if(err) res.status(500).json(err);
        res.status(200).json(response);
      }) 
  })
});

// UPDATE
router.put('/mallas/:code',upload.single('images') ,(req,res)=>{

  if(req.file != null){
    Cloudinary.v2.uploader.upload(req.file.path,(err,result)=>{
      if(err) res.status(500).json(err);
    
      malla.find({code: req.params.code},function(err,malla){
        malla.type =  req.body.type,
        malla.subtype = req.body.subtype,
        malla.code = req.body.code,
        malla.length = req.body.length,
        malla.color = req.body.color,
        malla.origin = req.body.origin,
        malla.description = req.body.description,
        malla.price_dolar = req.body.price_dolar,
        malla.price_args = req.body.price_args,
        malla.active = req.body.active,
        malla.imgurl = result.imgurl
      })
    })
  }else{
    malla.find({code: req.params.code},function(err,malla){
      malla.type =  req.body.type,
      malla.subtype = req.body.subtype,
      malla.code = req.body.code,
      malla.length = req.body.length,
      malla.color = req.body.color,
      malla.origin = req.body.origin,
      malla.description = req.body.description,
      malla.price_dolar = req.body.price_dolar,
      malla.price_args = req.body.price_args,
      malla.active = req.body.active
    })
  }
  /*  malla.findOneAndRemove(req.params.code,function(err,response){
      if(err) res.status(500).json(err);
    })      
    nuevaMalla.save(function(err,response){
      if(err) res.status(500).json(err);
      res.status(200).json(response);
    })*/
})

module.exports = router;
