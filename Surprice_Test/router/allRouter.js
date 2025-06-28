const express = require("express")
const controller = require("../controllers/allController")
const route = express.Router()
const multer = require("multer")

const fileName = multer.diskStorage({
    destination:(res,file,cb)=> {
        cb(null ,"uploads/")
    },
    filename : (req, file, cb)=>{
        cb(null ,file.originalname)
    }

})


const upload = multer({ storage: fileName }).single("image")




route.get("/",controller.index);
route.post("/addData",upload,controller.addData);
route.get("/deleteData" ,controller.deleteData)
route.get("/editData" ,controller.editData)
route.post("/update" , upload,controller.update)


module.exports = route