const mongoose = require("mongoose");

const allFilds = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const adminTbl = mongoose.model("allData", allFilds);

module.exports = adminTbl
