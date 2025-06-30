const express = require("express");

const router = express.Router();

const allController = require("../Controllers/All_In_One_controller");

router.get("/", allController.home);
router.get("/addmovie", allController.addMovie);

module.exports = router;
