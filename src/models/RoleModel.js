const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const roleSchema = new Schema({
    name:{
        type:String,
        unique:true,
    }
})

module.exports = mongoose.model("roles",roleSchema)