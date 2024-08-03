const express  = require('express'); //importing express module
require("./src/util/db")
const app = express(); //creating express object

//api produce//get post put delete patch

app.get("/test",(req,res)=>{
    console.log("Test API");
    //res.send("Test API");
    res.json({message:"Test API Called..."});
})

const user = {
    name:"Rahul",
    age:25,
    city:"Bangalore"
}

const users = [
    {
        id:1,
        name:"amit",
        age:23
    },
    {
        id:2,
        name:"sumit",
        age:25
    }
]

app.get("/user",(req,res)=>{
    
    res.json({
        message:"List of users",
        user:user
    })
})

app.get("/users",(req,res)=>{
    res.json({
        message:"List of users",
        users:users
    })
})

const PORT = 3001; //port number

app.listen(PORT,()=>{
    console.log("Server is running on port "+PORT);
})