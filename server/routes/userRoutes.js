const express = require("express");
const router = express.Router();

const UserController = require("../controllers/UserController");

router.get("/user/getAllUsers", UserController.getAllUsers);

router.get("/user/getUser", UserController.getUser);

router.post("/user/addUser", UserController.addUser);

router.put("/user/updateUser", UserController.updateUser);

router.delete("/user/deleteUser", UserController.deleteUser);

router.get("/user/getUser", UserController.getUser);

module.exports = router;
