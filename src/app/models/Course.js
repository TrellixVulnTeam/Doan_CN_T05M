const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema({
 name:{type:String, required: true},
 img:{type:String, required: true},

},{
    timestamps:true,
});

module.exports=mongoose.model('Course',Course)