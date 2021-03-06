var express = require("express");
var path = require("path");
var favicon = require("serve-favicon");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");

//mongodb
const db = require("./models/db");

var mallas = require("./routes/mallas");
var pilas = require("./routes/pilas");
var user = require("./routes/users");
var purchase = require("./routes/purchase")
//var abmMallas = require('./routes/abms/abmMallas');

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "client/build")));

app.use("/api", mallas);
app.use("/api", pilas);
app.use("/api/user", user);
app.use("/api/purchase", purchase)
//app.use('/admin',abmMallas);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  console.log(err.message);
});

module.exports = app;
