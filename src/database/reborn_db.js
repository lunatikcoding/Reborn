require('dotenv').config({
	path: require('path').resolve(__dirname, '../env/database.env'),
});

const { Pool } = require('pg');

const pool = new Pool({
	// Create a connection object
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	port: parseInt(process.env.DB_PORT),
	max: 10,
	idleTimeoutMillis: 10_000,
});

//Test Connection to Database

async function connectDB() {
	await pool.query('SELECT * FROM user_registration'); // fail fast if creds are wrong
	console.log('✅  PostgreSQL connected');
}

module.exports = {
	pool,
};
connectDB();
