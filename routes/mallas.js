var express = require('express');
var router = express.Router();

var cloudinaryConfig = require('../config/cloudinaryCong.json')
var Cloudinary = require('cloudinary');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' })


Cloudinary.config(cloudinaryConfig);

const malla = require('../models/malla')
 
// READ ALL
router.get('/mallas', (req, res,next) => { 
  console.log("var:", process.env.MONGODB_URI);
  malla.find({},function(err,mallas){
    if(err){
      res.send(err)
    }
    res.json(mallas);
  });
})

// READ BY TYPE
router.get('/mallas/:type',(req,res,next)=> {
  const type = req.params.type
  malla.find({type: type},function(err,mallas){
    if(err)
      res.send(err);
    res.json(mallas);
  })
})

// CREATE
router.post('/mallas', upload.single('images') ,(req,res)=>{
  let body = req.body;
  body.baja = false;
  Cloudinary.v2.uploader.upload(req.file.path, function(err,result) { 
    if(err) {
      console.log(err)
    }
    console.log(res)     
    body.imgUrl = result; 
  })
  malla.create(body,(err, MallaSchema) =>{
      if (err) {
        console.log(err);
      }
  });
});
// UPDATE
router.put('/mallas/:_id',(req,res)=>{
  const id = req.params._id;

  // UPDATE DE IMG URL EN EL SERVIDOR DE IMAGENES
  const oldimgUrl = mallas.find({_id : id },{imgUrl:1 , _id:0});
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
    length: req.params.length,
    color: req.params.color,
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
  malla.save(); 
})

// DELETE
router.get('/mallas/:id',(req,res)=>{
  let id = req.params.id;
  mallas.findById(id,(err,malla)=>{
    if(err) {
      console.log(err);
    }
    malla.baja = true; 
    malla.save();    
  })
})

router.




module.exports = router;
