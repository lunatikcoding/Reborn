const jwt = require('jsonwebtoken');
require('dotenv').config();

function generateToken(loggedUser) {
	const token = {
		id: loggedUser.id,
	};
	const accessToken = jwt.sign(
		token,
		process.env.ACCESS_TOKEN_SECRET,
		{
			expiresIn: '15m',
		}
	);
	const refreshToken = jwt.sign(
		token,
		process.env.REFRESH_TOKEN_SECRET,
		{
			expiresIn: '7d',
		}
	);
	return { accessToken, refreshToken };
}

module.exports = { generateToken };
