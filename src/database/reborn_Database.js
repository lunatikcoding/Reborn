require('dotenv').config({
	path: require('path').resolve(__dirname, '../env/database.env'),
});
console.log('DB_NAME from env:', process.env.DB_NAME);
console.log('DB_HOST from env:', process.env.DB_HOST);

const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

const { Client } = require('pg');

const client = new Client({
	// Create a connection object
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	port: parseInt(process.env.DB_PORT),
});

async function connectToDatabase() {
	try {
		await client.connect();
		console.log('Connected!');
	} catch (err) {
		console.error('Error:', err);
	}
}
connectToDatabase();
