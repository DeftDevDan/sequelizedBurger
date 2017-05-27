var express = require("express");
var moment = require("moment");
var router = express.Router();

var db = require("../models");

router.get("/", function(req, res) {
  db.burgers.findAll({}).then(function(data) {
    var hbsObject = {
      burgers: data,
      img: "../public/assets/img/burger.png"
    };

    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  db.burgers.create({
    burger_name: req.body.name,
    date: moment().format("YYYY-MM-DD HH:mm:ss")
  }).then(function(data){
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {

  db.burgers.update({
      devoured: req.body.devoured
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(data) {
      res.redirect("/");
    });
});

module.exports = router;