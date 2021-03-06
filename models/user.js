const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  bcrypt = require("bcrypt");

const SALT_WORK_FACTOR = 10;

const UserSchema = new Schema({
  fullName: {
    type: String,
    required: [true, "el nombre es requerido"]
  },
  email: {
    type: String,
    index: true,
    required: [true, "el email es requerido"],
    unique: [true, "Ya existe el mail"]
  },
  password: { type: String, required: true },
  phone: { type: Number, required: true },
  admin: { type: Boolean, requires: true, default: false }
});

UserSchema.pre("save", function(next) {
  var user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) return next();

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err);

    // hash the password using our new salt
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);

      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
  console.log(this.password);
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

UserSchema.methods.toJSON = function() {
  var obj = this.toObject();
  delete obj.password;
  return obj;
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
