const mongoose = require("mongoose")


const crud =mongoose.Schema({
    name:{
        type: String
    }
})

const modals = mongoose.model("data" ,crud)

module.exports =modals