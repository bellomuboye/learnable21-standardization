const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user");

router.get("/users", UserController.apiGetAllUsers)

module.exports = router;