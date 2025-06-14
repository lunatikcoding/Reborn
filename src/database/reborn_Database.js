const mysql = require('mysql2');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '076720054',
	database: 'reborn_fitness', // ← New database name!
});
connection.connect((error) => {
	if (error) {
		console.error('Error connecting to MySQL database:', error);
	} else {
		console.log('Connected to MySQL database!');
	}
});
