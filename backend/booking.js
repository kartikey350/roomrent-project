let mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    name:String,
    email:String,
    contact:String,
    roomno:Number,
    price:String,
    duration:String,
    type:String,
    bookingdate:String,
    status:String

});

module.exports = mongoose.model('booking',bookingSchema);
