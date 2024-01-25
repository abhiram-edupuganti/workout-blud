const express=require('express');
require('dotenv').config();
const workoutsRouter = require('./routes/workouts');
const app=express();
const mongoose=require('mongoose');
const mongoURI=process.env.MONGODB_URI;
const port=process.env.PORT;
const cors = require('cors');
app.use(cors())


app.use(express.json());

app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();
})

app.use('/api/workouts',workoutsRouter);

mongoose.connect(mongoURI)
.then(()=>{
    app.listen(port,()=>{
        console.log("connected to db and server is running at port");
    })
})
.catch((err)=>{
    console.log(err);
})



