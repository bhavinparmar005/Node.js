const mongoose = require("mongoose");

const signupSchema = mongoose.Schema({
  name: {
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
});

const adminSignup = mongoose.model("signup", signupSchema);

module.exports = adminSignup;
