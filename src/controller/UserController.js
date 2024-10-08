//require user model..
const userSchema = require("../models/UserModel");
const encrypt = require("../util/encrypt");

const getAllUsers = async (req, res) => {
  const users = await userSchema.find().populate("role");
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
  try {
    if (req.body.password) {
      req.body.password = await encrypt.encryptPassword(req.body.password);
    }
    const savedUser = await userSchema.create(req.body);
    res.json({
      message: "User added successfully",
      data: savedUser,
    });
  } catch (err) {
    res.json({
      message: "Failed to add user",
      error: err.message,
    });
  }
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
  console.log("req.query..", req.query);
  const name = req.query.name;
  const deletedUsers = await userSchema.deleteMany({ name: name });
  if (deletedUsers.deletedCount > 0) {
    res.json({
      message: "Users deleted successfully",
      data: deletedUsers,
    });
  } else {
    res.json({
      message: "Users not found",
    });
  }
};

const updateUser = async (req, res) => {
  //update user set name =?,... where id =?
  //id from params
  //update b=object from req.body..

  const id = req.params.id;
  const updateObj = req.body;

  const updatedUser = await userSchema.findByIdAndUpdate(id, updateObj, {
    new: true,
  });
  if (updatedUser) {
    res.json({
      message: "User updated successfully",
      data: updatedUser,
    });
  } else {
    res.json({
      message: "User not found",
    });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  //db user fine... -->email

  const userFindWithEmail = await userSchema.findOne({ email: email });
  console.log("userFindWithEmail..", userFindWithEmail);
  if (userFindWithEmail != null || userFindWithEmail != undefined) {
    //password --> string user..
    //hash --> db
    const isMatch = await encrypt.comparePassword(
      password,
      userFindWithEmail.password
    );
    if (isMatch) {
      res.json({
        message: "Login success",
        data: userFindWithEmail,
      });
    } else {
      res.status(401).json({
        message: "Invalid password",
      });
    }
  } else {
    res.status(404).json({
      message: "User not found",
    });
  }
};

//sam123 --> db -->encrypt

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  deleteUser,
  deleteUserByName,
  updateUser,
  loginUser,
};
