const UserModel = require('../models/user.model');

const bcrypt = require('bcryptjs');

async function registerUser(userData) {
	const { email, password } = userData;

	// Check if user already exists
	const existingUser = await UserModel.findUserByEmail(email);

	if (existingUser) {
		const error = new Error('A user with this email already exists.');
		error.statusCode = 409; // 409 Conflict
		throw error;
	}
	console.log('--- HASHING PASSWORD ---');
	console.log('Password received by service:', password);
	const hash = await bcrypt.hash(password, 10);

	// If all rules pass create the user
	const newUser = await UserModel.createUser({
		email,
		password: hash,
	});

	return newUser;
}

async function loginUser(userData) {
	const { email, password } = userData;

	const existingUser = await UserModel.findUserByEmail(email);

	if (existingUser == null) {
		const error = new Error('"Invalid credentials"');
		error.statusCode = 401;
		throw error;
	} else {
		const isMatch = await bcrypt.compare(
			password,
			existingUser.password
		);
		if (!isMatch) {
			const error = new Error('"Invalid credentials"');
			error.statusCode = 401;
			throw error;
		}
	}
	return existingUser;
}

module.exports = { registerUser, loginUser };
