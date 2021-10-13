var express = require("express");
var router = express.Router();
const { signup } = require("../controllers/signup");
const { login } = require("../controllers/login");
const Cust = require("../models/Cust");
router.post("/signup", signup);
router.post("/login", login);

module.exports = router;
 