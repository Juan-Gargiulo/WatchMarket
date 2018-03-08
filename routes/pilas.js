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
    pila.find(req.query,function(err,response){
      if(err) res.status(500).json(err);
      res.status(200).json(response);
    })
});

// READ ACTIVES
router.get("/pilas/actives", (req, res, next) => {
  pila.find({ active: true }, function(err, response) {
    if (err) res.status(500).json(err);
    res.status(200).json(response);
  });
});

router.get("/pilas/:code", (req, res, next) => {
  pila.find({ code: req.params.code }, function(err, response) {
    if (err) res.status(500).json(err);
    res.status(200).json(response);
  });
});


// CREATE
router.post('/pilas', upload.single('images') ,(req,res)=>{

    Cloudinary.v2.uploader.upload(req.file.path, function(err,result) { 
      if(err) res.status(500).json(err);

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
        if(err) res.status(500).json(err);
        res.status(200).json(response);
      })
    })    
});

router.put("/pilas/:code", upload.single("images"), (req, res) => {
  const update = () => {
    pila.findOneAndUpdate(
      { code: req.params.code },
      { $set: updatedPila },
      function(err, updated) {
        if (err) console.log(err);
        res.status(200).json(updated);
      }
    );
  };

  const updatedPila = {
    type: req.body.type,
    subtype: req.body.subtype,
    model: req.body.model,
    brand: req.body.brand,
    origin: req.body.origin,
    description: req.body.description,
    price_dolar: req.body.price_dolar,
    price_args: req.body.price_args,
    active: req.body.active
  };
  if (req.file) {
    Cloudinary.v2.uploader.upload(req.file.path, (err, result) => {
      if (err) res.status(500).json(err);

      updatedPila.imgurl = result.url;
      update();
    });
  } else {
    update();
  }
});


module.exports = router;