const express = require('express');
const app = express();
const userRoute = require('./routes/User');
const PORT = 8000;

app.use(express.json());
app.use('/', userRoute);

app.listen(PORT, () =>
	console.log(`Fitness App APIServer ON ${PORT}`)
);
