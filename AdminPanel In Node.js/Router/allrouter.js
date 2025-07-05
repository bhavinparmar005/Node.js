const express = require("express");

const imageMiddlwear = require("../Models/allData")

const router = express.Router()

const controller = require("../Controllers/controller")



router.get("/",controller.dashboard )
router.get("/tables",controller.tables )
router.get("/addProduct",controller.addProduct )
router.get("/signup",controller.signup )
router.get("/signin",controller.signin )
router.get("/editProduct",controller.editProduct )
router.get("/profile",controller.profile )
router.post("/addNewProduct",imageMiddlwear.upload,controller.addNewProduct )
router.post("/updateProduct",imageMiddlwear.upload,controller.updateProduct )
router.get("/deleteProduct",controller.deleteProduct )

module.exports = router;