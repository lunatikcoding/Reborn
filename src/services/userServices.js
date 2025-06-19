const { pool } = require('../database/reborn_db');

async function user_registration(userData) {
	const result = await pool.query(
		`INSERT INTO user_registration ( email, password,created_at,updated_at) 
    VALUES ($1, $2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP) 
    RETURNING *`,
		[userData.email, userData.password]
	);

	return result.rows[0];
}

module.exports = { user_registration };
