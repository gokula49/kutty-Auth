var mongoose = require("mongoose");

const Cust = new mongoose.Schema({
  org_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  Phone: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Cust", Cust);
