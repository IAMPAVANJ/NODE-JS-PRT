const mongoose = require("mongoose");

const event = new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    location:{type:String,required:true},
    startTime:{type:Date,required:true},
    endDate:{type:Date,required:true}
},{timestamps:true})

let user = mongoose.model("user",event)
module.exports = user