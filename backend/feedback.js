let mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:String,
    contact:Number,
    email:String,
    feedback:String

});

module.exports = mongoose.model('feedback',userSchema);
