const express = require("express"); //importing express module
require("./src/util/db");
const app = express(); //creating express object

//api produce//get post put delete patch

const userSchema = require("./src/models/UserModel"); //importing userSchema
//userSchema.find() //find is a method in userSchema

app.get("/users",async(req,res)=>{

  const users = await userSchema.find()
  res.json({
    message:"List of users",
    data:users
  })

})


app.get("/users/:id",async(req,res)=>{

  const id = req.params.id
  const user = await userSchema.findById(id)
  if(user){
    res.json({
      message:"User found",
      data:user
    })
  }
  else{
    res.json({
      message:"User not found"
    })
  }

})


const PORT = 3001; //port number

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
