const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/test");

const db = mongoose.connection

db.once("open",(err)=>{
    if(err){
        console.log(err)
    }
    console.log("db Connected sucessFully");
})

module.exports = db