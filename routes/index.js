const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "PTTShopping - Home" });
});

router.get("/index", function (req, res, next) {
  res.render("index", { title: "PTTShopping - Home" });
});

router.get("/about", function (req, res, next) {
  res.render("about", { title: "PTTShopping - About" });
});

router.get("/shop", function (req, res, next) {
  res.render("shop", { title: "PTTShopping - Shop" });
});

router.get("/contact", function (req, res, next) {
  res.render("contact", { title: "PTTShopping - Contact" });
});

module.exports = router;
