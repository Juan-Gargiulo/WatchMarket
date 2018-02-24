var express = require('express');
var router = express.Router();

var cloudinaryConfig = require('../config/cloudinaryCong.json')
var Cloudinary = require('cloudinary');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' })


Cloudinary.config(cloudinaryConfig);

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

router.post('/mallas', upload.single('images') ,(req,res)=>{

  Cloudinary.v2.uploader.upload(req.file.path, function(err,result) {
      if(err) console.log(err)
      console.log(result)

      //en result tenes la url de la imagen, guardala en imageUrl del modelo
  })


})




module.exports = router;
