const mongoose = require("mongoose");
const multer = require('multer');

const path = require('path');

const imagePath = '/Uploads/Product_Image';

const allFilds = mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
});


const Filestorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname,"..",imagePath))
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})

allFilds.statics.upload = multer({ storage: Filestorage }).single('image');
allFilds.statics.addPath = imagePath;

const adminTbl = mongoose.model("allData", allFilds);

module.exports = adminTbl;
