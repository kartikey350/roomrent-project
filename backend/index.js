const mongoose = require('mongoose');
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const app = express();
mongoose.connect('mongodb://127.0.0.1:27017/Roomify');

app.use(cors());

app.use(bodyparser.json({limit:'50mb'}));
app.use(bodyparser.urlencoded({limit:'50mb',extended:true}));
app.use(express.json());


let admin = require('./admin');
let user = require('./user');  
let room = require('./rooms');
let booking = require('./booking');
let feedback = require('./feedback');

app.post('/adminlogin',async (req,res)=>{
    if(req.body.username && req.body.password)
    {
        let data = await admin.findOne(req.body).select('-password');
        if (data){
            res.send(data);
        }
        else{
            res.send("username and Password  no matched");
        }
    }
    else{
        res.send("provide both email and password");
    }
});


app.post('/signup',async(req,res)=>{
    console.log("called");
    let result = new user(req.body);
    let data = await result.save();
    res.send(data);
});

app.post('/login',async (req,res)=>{
    if(req.body.email && req.body.password)
    {
        let data = await user.findOne(req.body).select('-password');
        if (data){
            res.send(data);
        }
        else{
            res.send("Email and Password  no matched");
        }
    }
    else{
        res.send("provide both email and password");
    }
});


//get users api

app.get('/getusers',async(req,res)=>{
    let data = await user.find();
    res.send(data);
});

//delete users api

app.delete('/deleteuser/:id',async (req,res)=>{
    let data = await user.deleteOne({_id:req.params.id});
    res.send(data);
});


//addroom api

app.post('/addroom',async(req,res)=>{
    let result = new room(req.body);
    let data = await result.save();
    res.send(data);
});

// get room api

app.get('/getroom',async(req,res)=>{
    let data = await room.find();
    res.send(data);
});

app.delete('/deleteroom/:id',async (req,res)=>{
    let data = await room.deleteOne({_id:req.params.id});
    res.send(data);
});

app.get('/editroom/:id',async (req,res)=>{

    let data = await room.findOne({_id:req.params.id});
    res.send(data);
});

app.put('/updateroom/:id',async(req,res)=>{
    let data = await room.updateOne(
        {_id: req.params.id},
        {$set: req.body}
    );
    res.send(data);
});

//booking api 
app.post('/booking',async(req,res)=>{
    let result = new booking(req.body);
    let data = await result.save();
    res.send(data);
});

// my booking api 
app.get('/userbooking/:email',async(req,res)=>{
    let data = await booking.find({email:req.params.email});
    res.send(data);
});

//feedback api

app.post('/feedback',async(req,res)=>{
    let result = new feedback(req.body);
    let data = await result.save();
    res.send(data);
});

//viewfeedback api 


app.get('/viewfeedback',async (req,res)=>{
    let data = await feedback.find();
    res.send(data);
});

// view booking api 

app.get('/bookings',async(req,res)=>{
    let data =  await booking.find();
    res.send(data);
});

app.delete('/deletebooking/:id',async (req,res)=>{
    let data = await booking.deleteOne({_id:req.params.id});
    res.send(data);
});

app.get('/editbooking/:id',async (req,res)=>{

    let data = await booking.findOne({_id:req.params.id});
    res.send(data);
});

app.put('/updatebooking/:id',async(req,res)=>{
    let data = await booking.updateOne(
        {_id: req.params.id},
        {$set: req.body}
    );
    res.send(data);
});

app.get('/searchbooking/:key',async (req,res)=>{
    let result = await booking.find({
        "$or":[
            { email:{$regex:req.params.key,$options: 'i'} },{contact:{$regex:req.params.key,$options: 'i'} }
        ]
    });
    res.send(result);
});

app.get('/searchroom/:key',async (req,res)=>{
    let result = await room.find({
        "$or":[
            { type:{$regex:req.params.key,$options: 'i'} }
        ]
    });
    res.send(result);
});

app.delete('/deletefeedback/:id',async (req,res)=>{
    let data = await feedback.deleteOne({_id:req.params.id});
    res.send(data);
});


app.listen(4500);