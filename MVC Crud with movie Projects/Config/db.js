const mongoose =require('mongoose');

mongoose.connect("mongodb://localhost:27017/movieData")

const db = mongoose.connection
db.once("open", (err)=>{
    if(err){
        console.log(err)
        return false
    }

    console.log("DataBase Connected >>> ")
})

module.exports = db