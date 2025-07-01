const mongoose = require("mongoose");

const movieschema = mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
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

const movieTbl = mongoose.model("movie", movieschema);

module.exports = movieTbl;
