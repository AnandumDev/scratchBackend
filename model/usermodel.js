const mongoose = require ("mongoose");

const userscheme = new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String}
})
const userModel = mongoose.model("user",userscheme)

module.exports = userModel

