const userService = require('../services/userServices');
const generateToken = require('../utils/jwts');

async function registration(req, res) {
	try {
		const { email, password } = req.body;

		const newUser = await userService.registerUser({
			email,
			password,
		});

		res.status(201).json({
			message: 'User registered successfully!',
			user: newUser,
		});
		console.log('Request Body:', req.body);
	} catch (error) {
		res
			.status(error.statusCode || 500)
			.json({ message: error.message });
		console.log(error);
	}
}

async function userLogin(req, res) {
	try {
		const { email, password } = req.body;

		const loggedUser = await userServices.loginUser({
			email,
			password,
		});
		const generateToken = jwtUtils.generateToken(loggedUser);

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
