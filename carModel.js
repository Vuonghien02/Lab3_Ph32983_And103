const mongoose = require('mongoose');
const { type } = require('os');
const CarSchema = new mongoose.Schema({
    //viet ra cac truong du lieu tuong ung voi mongo
    ten:{
        type:String,
        required:true
    },
    namSX:{
        type:Number,
    },
    hang:{
        type:String,
        required:true
    },
    gia:{
        type:Number,
    },
});
const CarModel = new mongoose.model('car', CarSchema);
module.exports = CarModel;
