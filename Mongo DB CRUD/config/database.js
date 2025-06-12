const mongoose =require('mongoose')

mongoose.connect("mongodb://localhost:27017/CRUd")

const database = mongoose.connection;

database.once('open',(err)=>{
    if(err){
        console.log(err)
        return false
    }
    console.log("connected  database!!")
})