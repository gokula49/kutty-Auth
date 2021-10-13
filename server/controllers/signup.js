const Cust = require("../models/Cust");

const signup = async (req, res) => {
  try {
    const cust = new Cust({
      org_name: req.body.org_name,
      email: req.body.email,
      password: req.body.password,
      country: req.body.country,
      state: req.body.state,
      Phone: req.body.Phone,
    });
    console.log(req.body);
    console.log(cust);
    const savedUser = await cust.save();
    console.log(savedUser);
    return res.send("sucess");
  } catch (err) {
    return res.status(400).json(err);
  }
};

module.exports = { signup };
