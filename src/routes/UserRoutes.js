const router = require('express').Router();
const userController = require('../controller/UserController');
router.get("/users",userController.getAllUsers)
router.get("/user/:id",userController.getUserById)
router.delete("/user/:id",userController.deleteUser)
router.post("/user",userController.addUser)
router.delete("/userbyname",userController.deleteUserByName)
router.put("/updateuser/:id",userController.updateUser)

module.exports = router;
