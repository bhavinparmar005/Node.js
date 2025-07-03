const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/AdminPenal")

const db = mongoose.connection;

db.once("open" , (err)=>{
    if (err) throw err;
    console.log("Database Connected SuccessFully !!!...");

})