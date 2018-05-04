const express = require("express");
const router = express.Router();

const User = require("../models/user");

router.post("/", (req, res) => {
  const newUser = new User({
    firstName: rconsteq.body.firstName,
    lastName: req.body.lastName,
    email: req.body.mail,
    password: req.body.password
  });

  newUser.save(err => {
    if (err) throw err;

    res.sendStatus(201);
  });
});

router.post("/login", (req, res) => {
  User.findOne({ mail: req.body.email }, (err, user) => {
    if (err) throw err;

    user.comparePassword(req.body.password, (err, isMatch) => {
      if (err) throw err;

      if (isMatch) {
        res.status(200).json(user);
      } else {
        res.sendStatus(401);
      }
    });
  });
});

module.exports = router;
