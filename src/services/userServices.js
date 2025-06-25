const UserModel = require('../models/user.model');

const bcrypt = require('bcryptjs');

async function registerUser(userData) {
	const { email, password } = userData;

	// RULE #1: Check if user already exists
	const existingUser = await UserModel.findUserByEmail(email);

	if (existingUser) {
		// If so, stop and report the problem
		const error = new Error('A user with this email already exists.');
		error.statusCode = 409; // 409 Conflict
		throw error;
	}
	const hash = await bcrypt.hash(password, 10);

	// If all rules pass, tell the filing clerk to create the user
	const newUser = await UserModel.createUser({
		email,
		password: hash, // Later, this will be hashedPassword
	});

	return newUser;
}

module.exports = { registerUser };
