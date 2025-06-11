const express = require("express");
const router = express.Router();
const workouts = require("../testData.js");

//reads
router.get("/", (req, res) => {
	console.log("Received");
	res.send(workouts);
});

//create a new excersise and adds it in
router.post("/api/routes", (req, res) => {
	console.log("Received workout:", req.body);
	const newWorkout = req.body;
	workouts.push(newWorkout);
	res.json(workouts);
});

router.delete("/api/routes", (req, res) => {
	workouts.pop();
	res.json(workouts);
});
module.exports = router;
