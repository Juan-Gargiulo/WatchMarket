const express = require("express");
const router = express.Router();

const User = require("../models/user");

router.post("/", (req, res) => {
  
  try {
    const newUser = new User({
      fullName: req.body.fullName,
      phone: req.body.phone,
      email: req.body.email,
      password: req.body.password
    });

    newUser
      .save()
      .then(user => res.status(201).send(user))
      .catch(err => res.status(500).send(err));
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/login", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) res.sendStatus(500);

    if (!user) {
      res.status(204).send("No existe el email");
    }

    user.comparePassword(req.body.password, (err, isMatch) => {
      //if (err) res.sendStatus(500);

      console.log(isMatch, "isMatch");
      if (isMatch) {
        res.status(200).json(user);
      } else {
        res.status(401).json({ error: "El password es incorrecto" });
      }
    });
  });
});

module.exports = router;
