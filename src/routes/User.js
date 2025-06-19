const express = require("express");
const router = express.Router();
const userServices = require("../services/userServices");

//reads
router.post("/", async (req, res) => {
	const result = await userServices.userRegistration();
	res.json(result);
});

module.exports = router;
