const Cust = require("../models/Cust");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const emailvalid = await Cust.findOne({ email: req.body.email });
  if (!emailvalid) return res.status(400).send("Email not exists");

  if (req.body.password != emailvalid.password)
    return res.status(400).send("Password wrong");
  const token = jwt.sign({ _id: emailvalid.id }, process.env.tokenkey);
  res.header("auth-token", token).send({ token: token, email: req.body.email });
};

module.exports = { login };
