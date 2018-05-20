var express = require('express');
var router = express.Router();

const Purchase = require('../models/purchase')

router.post('/', (req,res) => {

  const purchase = new Purchase({
    buyer: req.body.buyer,
    mallas: req.body.mallas,
    comment: req.body.comment
  })

  purchase.save()
    .then(purchase => res.status(200).json(purchase))
    .catch(err => res.status(500).json({error: err.message}))

});

router.get("/", (req, res, next) => {
  
  Purchase.find({})
    .populate('buyer')
    .populate('mallas')
    .populate('Pila')
    .exec( (err, purchases) => {
      if (err) res.status(500).json(err) 

      res.status(200).json(purchases) 
    });
});

module.exports = router;