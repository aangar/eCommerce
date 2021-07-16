const mongoose = require('mongoose');
const passportLM = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    email : {
        type : String,
        unique : true,
        required : true
    },
    cart : Array
})

userSchema.plugin(passportLM);

module.exports = mongoose.model("User" , userSchema);