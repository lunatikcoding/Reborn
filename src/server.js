const express = require("express");
const app = express();
const db = require("./database");

const PORT = 8000;

const userRoute = require("./routes/User");

app.use(express.json());
app.use("/", userRoute);

app.listen(PORT, () =>
	console.log(`Fitness App APIServer ON ${PORT}`)
);
