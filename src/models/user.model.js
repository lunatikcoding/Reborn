const { pool } = require("../database/reborn_db");

//  file from the cabinet
async function findUserByEmail(email) {
	const result = await pool.query(
		"SELECT * FROM user_registration WHERE email = $1",
		[email]
	);
	return result.rows[0];
}

// Puts a new file in
async function createUser(userData) {
	const { email, password } = userData;
	const result = await pool.query(
		`INSERT INTO user_registration (email, password, created_at, updated_at) 
         VALUES ($1, $2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP) 
         RETURNING id, email, created_at`,
		[email, password]
	);
	return result.rows[0];
}

module.exports = { findUserByEmail, createUser };
