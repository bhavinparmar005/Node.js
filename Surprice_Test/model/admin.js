const mongoose = require("mongoose");

const admintbl = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});


const admin = mongoose.model("user" ,admintbl)

module.exports = admin