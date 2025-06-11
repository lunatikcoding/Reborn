const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./test.db", (err) => {
	if (err) {
		console.error(err.message);
	}
	console.log("connection established");
});

db.run(
	`CREATE TABLE IF NOT EXISTS users (
	id integer PRIMARY KEY AUTOINCREMENT,
	name text NOT NULL ,
	email text NOT NULL UNIQUE,
	age integer NOT NULL )`,
	(error) => {
		if (error) {
			console.log("Oops! Table creation failed:", error);
		} else {
			db.all("SELECT * FROM users", (error, rows) => {
				console.log(rows);
			});
		}
	}
),
	db.run(
		`INSERT OR IGNORE INTO users  (name,email,age)VALUES (?,?,?)`,
		["JEANYY", "JEANNY@GMAIL.COM", 45],
		(error) => {
			if (error) {
				console.log("Oops UPDATE failed:", error);
			} else {
				console.log("user added");
			}
		}
	),
	db.all("SELECT * FROM users", (error, rows) => {
		console.log(rows); // This shows you all the data!
	});

db.close((err) => {
	if (err) {
		return console.log(err);
	}
	console.log("connection closed");
});
