const mongoose = require("mongoose");

const admin = mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  releaseDate: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports =mongoose.model("book" , admin)