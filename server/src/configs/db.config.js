/** @format */

// const env = process.env;
// const fs = require("fs");
const db = {
	host: "localhost",
	user: "root",
	password: "",
	database: "luanvan",
	port: 3306,
	// ssl: {
	//   mode: 'VERIFY_IDENTITY',
	//   ca: fs.readFileSync('/etc/ssl/cert.pem', 'utf-8'),
	// }
};

module.exports = db;
