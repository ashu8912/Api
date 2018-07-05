const mongoose=require('mongoose');
var Users=mongoose.model('user',{
id:{
    type:Number,
    required:true
},
name:{
type:String,
required:true,
default:'John Doe'
},
userName:{
    type:String,
    required:true,
    default:'N/A'
},
webiste:{
    type:String,
    trim:true
}
});
module.exports={
    Users
}