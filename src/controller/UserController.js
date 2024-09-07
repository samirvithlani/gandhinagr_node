//require user model..
const userSchema = require("../models/UserModel");

const getAllUsers = async (req, res) => {
  const users = await userSchema.find();
  res.json({
    message: "List of users",
    data: users,
  });
};
const getUserById = async (req, res) => {
  const user = await userSchema.findById(req.params.id);
  if (user) {
    res.json({
      message: "User found",
      data: user,
    });
  } else {
    res.json({
      message: "User not found",
    });
  }
};

const addUser = async (req, res) => {
  //console.log("req.body..",req.body)
  const savedUser = await userSchema.create(req.body);
  res.json({
    message: "User added successfully",
    data: savedUser,
  });
  //res.send("ok...")
};

const deleteUser = async (req, res) => {
  //id..
  const id = req.params.id;
  const deletedUser = await userSchema.findByIdAndDelete(id);
  if (deletedUser) {
    res.json({
      message: "User deleted successfully",
      data: deletedUser,
    });
  } else {
    res.json({
      message: "User not found",
    });
  }
};
//req.query example

const deleteUserByName = async (req, res) => {

    console.log("req.query..",req.query)
    const name = req.query.name;
    const deletedUsers = await userSchema.deleteMany({name:name})
    if(deletedUsers.deletedCount>0){

        res.json({
            message:"Users deleted successfully",
            data:deletedUsers
        })

    }
    else{
        res.json({
            message:"Users not found",
        })
    }



}


module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  deleteUser,
  deleteUserByName
};
