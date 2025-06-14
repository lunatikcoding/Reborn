// WARNING: This code includes hardcoded credentials and is NOT secure for production use.
// It is for demonstration purposes ONLY.
require("dotenv").config();

const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

const mysql = require("mysql2"); // Import the mysql2 package

const connection = mysql.createConnection({
	// Create a connection object
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	port: process.env.DB_PORT,
});

connection.connect((error) => {
	// Attempt to establish the connection
	if (error) {
		console.error("Error connecting to MySQL database:", error); // Log an error if the connection fails
	} else {
		console.log("Connected to MySQL database!"); // Log success message if connection is successful
	}
});

// IMPORTANT: After testing or demonstration, please switch to using environment variables
// as described in previous responses to keep your credentials secure.
