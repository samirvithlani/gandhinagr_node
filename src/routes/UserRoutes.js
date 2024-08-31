const router = require('express').Router();
const userController = require('../controller/UserController');
router.get("/users",userController.getAllUsers)
router.get("/user/:id",userController.getUserById)
router.post("/user",userController.addUser)

module.exports = router;
