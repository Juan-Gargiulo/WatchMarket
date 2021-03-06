var express = require("express");
var router = express.Router();
var cloudinaryConfig = require("../config/cloudinaryCong.json");
var Cloudinary = require("cloudinary");
var multer = require("multer");
Cloudinary.config(cloudinaryConfig);

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now())
  }
});

var upload = multer({storage: storage});


const malla = require("../models/malla");

// READ ALL
router.get("/mallas", (req, res, next) => {
  malla.find(req.query, function(err, response) {
    if (err) res.status(500).json(err);
    res.status(200).json(response);
  });
});

// READ ACTIVES
router.get("/mallas/actives", (req, res, next) => {
  malla.find({ active: true }, function(err, response) {
    if (err) res.status(500).json(err);
    res.status(200).json(response);
  });
});

router.get("/mallas/:code", (req, res, next) => {
  malla.find({ code: req.params.code }, function(err, response) {
    if (err) res.status(500).json(err);
    res.status(200).json(response);
  });
});

// CREATE
router.post("/mallas", upload.single("images"), (req, res) => {
  Cloudinary.v2.uploader.upload(req.file.path, function(err, result) {
    if (err) res.status(500).json(err);
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

    nuevaMalla.save(function(err, response) {
      if (err) res.status(500).json(err);
      res.status(200).json(response);
    });
  });
});

// UPDATE
router.put("/mallas/:code", upload.single("images"), (req, res) => {
  const update = () => {
    malla.findOneAndUpdate(
      { code: req.params.code },
      { $set: updatedMalla },
      function(err, updated) {
        if (err) console.log(err);
        res.status(200).json(updated);
      }
    );
  };

  const updatedMalla = {
    type: req.body.type,
    subtype: req.body.subtype,
    length: req.body.length,
    color: req.body.color,
    origin: req.body.origin,
    description: req.body.description,
    price_dolar: req.body.price_dolar,
    price_args: req.body.price_args,
    active: req.body.active
  };
  if (req.file) {
    Cloudinary.v2.uploader.upload(req.file.path, (err, result) => {
      if (err) res.status(500).json(err);

      updatedMalla.imgurl = result.url;
      update();
    });
  } else {
    update();
  }
});

module.exports = router;
