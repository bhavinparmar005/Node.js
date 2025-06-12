const mongoose = require("mongoose");

const admin = mongoose.Schema({
  FristName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  ConfirmPassword: {
    type: String,
    required: true,
  },
  Gender: {
    type: String,
    required: true,
  },
  Hobby: {
    type: Array,
    required: true,
  },
  SourseOfIncome: {
    type: String,
    required: true,
  },
  Income: {
    type: Number,
    required: true,
  },
  ProfilePicture: {
    type: String,
    required: true,
  },
  Age: {
    type: Number,
    required: true,
  },
  Bio: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("bhavin", admin);
