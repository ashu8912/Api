const express=require('express');
const bodyParser=require('body-parser');
const {mongoose}=require('./db/mongoose');
const {Users}=require('./models/users');

const app=express();
app.use(bodyParser.json());

//post request handler
app.post('/users',(req,res)=>{
var user=new Users(req.body);
user.save().then((users)=>{
    res.status(200).send(users);
}).catch((e)=>res.status(400).send(e))
})
//get request handler
app.get("/users",(req,res)=>{
    Users.find().then((users)=>{
        res.status(200).send(users);
    }).catch((e)=>res.status(400).send(e))
})
//filtering user and getting them by id
app.get('/users/:id',(req,res)=>{
    Users.find({id:req.params.id}).then((user)=>{
        if(!user)
        {
            console.log("no such user");
        }
        console.log(user);
        res.send(user);
    }).catch((e)=>res.send(e))
})
app.listen(3000,()=>{
    console.log("listening at port 3000");
})