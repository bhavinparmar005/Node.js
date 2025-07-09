const express = require("express");

const imageMiddlwear = require("../Models/allData");
const auth =require("../Middelware/Authentication")

const router = express.Router();

const controller = require("../Controllers/controller");

router.get("/signup", controller.signup); // render signup page
router.get("/", controller.signin); // render a signin page
router.post("/getsignData", controller.getsignData); // signdata send to mongo db
router.post("/signinData", controller.signinData); // create cookies and move next router
router.get("/logout", auth,controller.logout);  // delete cookies and logout
router.get("/dashboard",auth, controller.dashboard);
router.get("/tables", auth, controller.tables);
router.get("/addProduct",auth ,controller.addProduct);
router.get("/editProduct",auth, controller.editProduct);
router.get("/profile", auth,controller.profile);
router.post("/addNewProduct",auth ,imageMiddlwear.upload, controller.addNewProduct);
router.post("/updateProduct", auth,imageMiddlwear.upload, controller.updateProduct);
router.get("/deleteProduct",auth ,controller.deleteProduct);

module.exports = router;
