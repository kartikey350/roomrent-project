let mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:String,
    contact:String,
    email:String,
    address:String,
    gender:String,
    password:String

});

module.exports = mongoose.model('registration',userSchema);
