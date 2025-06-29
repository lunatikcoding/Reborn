const userService = require('../services/userServices');

async function registration(req, res) {
	// Use a try/catch block to handle any problems reported by the specialist
	try {
		// Step 1: Get data from the incoming request form
		const { email, password } = req.body;

		// Step 2: Call the specialist to handle the business process
		const newUser = await userService.registerUser({
			email,
			password,
		});

		// Step 3: everything went well
		res.status(201).json({
			message: 'User registered successfully!',
			user: newUser,
		});
		console.log('Request Body:', req.body);
	} catch (error) {
		// Step 4: If the specialist reported a problem, send the "rejection letter"
		res
			.status(error.statusCode || 500)
			.json({ message: error.message });
		console.log(error);
	}
}

async function userLogin(req, res) {
	try {
		const { email, password } = req.body;

		const newLogin = await userService.loginUser({
			email,
			password,
		});

		console.log(req.body);
	} catch (error) {
		res
			.status(error.statusCode || 500)
			.json({ message: error.message });
		console.log(error);
	}
}

async function userLogOut(req, res) {
	const logOut = await req.body;
	res.send('logOut');
	console.log(login);
}
module.exports = { registration, userLogin, userLogOut };
