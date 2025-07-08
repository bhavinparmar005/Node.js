const express = require("express");

const imageMiddlwear = require("../Models/allData")

const router = express.Router()

const controller = require("../Controllers/controller")

router.get("/dashboard",controller.dashboard )
router.get("/signup",controller.signup )
router.post ("/getsignData",controller.getsignData)
router.get("/",controller.signin )
router.post("/signinData",controller.signinData)
router.get("/tables",controller.tables )
router.get("/addProduct",controller.addProduct )
router.get("/editProduct",controller.editProduct )
router.get("/profile",controller.profile )
router.post("/addNewProduct",imageMiddlwear.upload,controller.addNewProduct )
router.post("/updateProduct",imageMiddlwear.upload,controller.updateProduct )
router.get("/deleteProduct",controller.deleteProduct )

module.exports = router;