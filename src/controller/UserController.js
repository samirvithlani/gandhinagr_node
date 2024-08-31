//require user model..
const userSchema = require("../models/UserModel")

const getAllUsers = async (req, res) => {
    const users= await userSchema.find()
    res.json({
        message:"List of users",
        data:users
    })

}
const getUserById = async (req, res) => {
    const user = await userSchema.findById(req.params.id)
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
}

const addUser = async(req,res)=>{

    //console.log("req.body..",req.body)
    const savedUser  = await userSchema.create(req.body)
    res.json({
        message:"User added successfully",
        data:savedUser
    })
    //res.send("ok...")


}
    
module.exports = {
    getAllUsers,
    getUserById,
    addUser
}
