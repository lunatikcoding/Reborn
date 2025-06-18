const express = require("express");
const router = express.Router();
const userServices = require("../services/userServices");

//reads
router.get("/api", async (req, res) => {
	const result = await userServices.testing();
	res.json(result);
});

module.exports = router;
