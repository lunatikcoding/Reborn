const express = require("express");
const router = express.Router();
const userServices = require("../services/userServices");

//reads
router.post("/register", userController.registration);

module.exports = router;
