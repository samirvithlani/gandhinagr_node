const router = require('express').Router();
const userController = require('../controller/UserController');
const ageMiddleware = require('../middleware/AgeMiddleware');

router.get("/user",userController.getAllUsers)
router.get("/user/:id",userController.getUserById)
router.delete("/user/:id",userController.deleteUser)

router.post("/user",ageMiddleware,userController.addUser)

router.delete("/userbyname",userController.deleteUserByName)
router.put("/updateuser/:id",userController.updateUser)
router.post("/login",userController.loginUser)

module.exports = router;
