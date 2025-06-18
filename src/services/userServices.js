const { pool } = require("../database/reborn_db");

async function testing(userData) {
	const result = await pool.query(
		`SELECT * FROM users  
    VALUES ($1, $2, NOW(), NOW()) 
    RETURNING *`,
		[email, password]
	);

	return result.rows[0];
}

module.exports = { testing };
