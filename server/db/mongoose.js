const mongoose=require('mongoose');
mongoose.Promise=global.Promise;
mongoose.connect("mongodb://ashu:ashu12@ds129321.mlab.com:29321/apis",{ useNewUrlParser: true });
module.exports={
    mongoose
}