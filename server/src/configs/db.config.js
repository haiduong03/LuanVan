/** @format */

// const env = process.env;
require("dotenv").config();
// const fs = require("fs");
const db = {
	// host: "localhost",
	// user: "root",
	// password: "",
	// database: "luanvan",
	// port: 3306,
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
	port: process.env.DB_PORT,
	// ssl: {
	//   mode: 'VERIFY_IDENTITY',
	//   ca: fs.readFileSync('/etc/ssl/cert.pem', 'utf-8'),
	// }
};

module.exports = db;
