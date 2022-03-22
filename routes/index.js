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

router.get("/checkout", function (req, res, next) {
  res.render("checkout", { title: "PTTShopping - Checkout" });
});

router.get("/login", function (req, res, next) {
  res.render("login", { title: "PTTShopping - Login" });
});

router.get("/register", function (req, res, next) {
  res.render("register", { title: "PTTShopping - Register" });
});

router.get("/admin_manage", function (req, res, next) {
  res.render("admin_manage", { title: "PTTShopping - Manage user" });
});

router.get("/admin_login", function (req, res, next) {
  res.render("admin_login", { title: "PTTShopping - Admin login" });
});

router.get("/admin_info", function (req, res, next) {
  res.render("admin_info", { title: "PTTShopping - Admin Information" });
});

router.get("/info", function (req, res, next) {
  res.render("info", { title: "PTTShopping - Personal Information" });
});

router.get("/cart", function (req, res, next) {
  res.render("cart", { title: "PTTShopping - Shopping Cart" });
});

module.exports = router;
