const express = require("express");
const imageMiddlwear = require("../Models/allData");
const controller = require("../Controllers/controller");
const chekforLogin =require("../Middelware/chekforLogin")
const chekforLogout =require("../Middelware/checkforLogout")
const router = express.Router();

router.get("/signup",chekforLogout, controller.signup); // render signup page
router.get("/" ,chekforLogout,controller.signin); // render a signin page
router.post("/getsignData", controller.getsignData); // signdata send to mongo db
router.post("/signinData", controller.signinData); // create cookies and move next router
router.get("/logout",controller.logout);  // delete cookies and logout
router.get("/dashboard",chekforLogin, controller.dashboard); // render a dashboard
router.get("/tables", chekforLogin, controller.tables);  // all data show in table
router.get("/addProduct",chekforLogin ,controller.addProduct); // render add data form 
router.get("/editProduct",chekforLogin, controller.editProduct); // render edit data form 
router.get("/profile", chekforLogin,controller.profile); // render a profile page
router.post("/addNewProduct",chekforLogin ,imageMiddlwear.upload, controller.addNewProduct); // add data in database
router.post("/updateProduct", chekforLogin,imageMiddlwear.upload, controller.updateProduct);  // updata data in database
router.get("/deleteProduct",chekforLogin ,controller.deleteProduct); // delete data in database

module.exports = router;
