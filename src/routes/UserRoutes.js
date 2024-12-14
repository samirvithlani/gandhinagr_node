const router = require('express').Router();
const userController = require('../controller/UserController');
const ageMiddleware = require('../middleware/AgeMiddleware');
const verifyUser = require("../middleware/authMiddleware")

router.get("/user",verifyUser,userController.getAllUsers)
router.get("/user/:id",verifyUser,userController.getUserById)
router.delete("/user/:id",userController.deleteUser)

router.post("/user",ageMiddleware,userController.addUser)

router.delete("/userbyname",userController.deleteUserByName)
router.put("/updateuser/:id",userController.updateUser)
router.post("/login",userController.loginUser)

module.exports = router;
