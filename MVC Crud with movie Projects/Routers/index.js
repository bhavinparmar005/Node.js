const express = require("express");

const router = express.Router();

const allController = require("../Controllers/All_In_One_controller");

const multer = require("multer");

const fileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "UploadMovieImage/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const Imageupload = multer({ storage: fileStorage }).single("image");

router.get("/", allController.home);
router.get("/addmovie", allController.addMovie);
router.post("/addmovie",Imageupload ,allController.addmovieData);
router.get("/editmovie", allController.editmovie);
router.post("/updatemovie",Imageupload, allController.updateMovie);
router.get("/deletemovie" ,allController.deleteMovie)

module.exports = router;
