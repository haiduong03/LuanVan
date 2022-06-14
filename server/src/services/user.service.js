/** @format */

// const { query } = require("express");
const db = require("./db.service");
const helper = require("../utils/helper.util");
const config = require("../configs/general.config");
const emailValid = require("email-validator");
const passValid = require("password-validator");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const bcryptjs = require("bcryptjs");

async function getAllUsr(page) {
	const offset = helper.getOffset(page, config.listPerPage);
	const rows = await db.query(`SELECT * FROM user LIMIT ?,?`, [
		offset,
		config.listPerPage,
	]);
	const data = helper.emptyOrRows(rows);
	const meta = {
		page,
	};

	return {
		data,
		meta,
	};
}

async function findUsrId(id) {
	return await db.query(`SELECT * FROM user where user_id=?`, [id]);
}

async function findUsrMail(email) {
	return await db.query(`SELECT * FROM user where user_email=?`, [email]);
}

async function findUsrName(name) {
	return await db.query(
		`SELECT * FROM user where user_name LIKE ` + `N'%${name}%'`,
	);
}

async function checkEmailValid(email) {
	return emailValid.validate(email);
}

async function checkPassValid(password) {
	// return passValid().validate(password).error.details[0].message;
	const constructor = new passValid()
		// Add properties to it
		.is()
		.min(8) // Minimum length 8
		.is()
		.max(100) // Maximum length 100
		.has()
		.uppercase() // Must have uppercase letters
		.has()
		.lowercase() // Must have lowercase letters
		.has()
		.digits(2) // Must have at least 2 digits
		.has()
		.not()
		.spaces() // Should not have spaces
		.is()
		.not()
		.oneOf(["abcd1234", "12345678"]); // Blacklist these values

	return constructor.validate(password); // true or false
}

async function createUsr(user) {
	const oldUsr = await findUsrMail(user.user_email);
	const email = await checkEmailValid(user.user_email);
	const pass = await checkPassValid(user.user_pass);

	let message = null;

	if (oldUsr != 0) {
		message = "Already have user";
		return { message };
	}
	if (email == false) {
		message = "Email must have type 'abc@email.com'";
		return { message };
	}
	if (pass == false) {
		message =
			"Password must have min = 8, max =100, uppercase letters, lowercase letters, at least 2 digits, not have space";
		return { message };
	}
	if (oldUsr == 0 && pass == true && email == true) {
		const salt = await bcryptjs.genSaltSync(parseInt(process.env.SALT));
		const hash = await bcryptjs.hashSync(user.user_pass, salt);
		const result = await db.query(
			`INSERT INTO  user
	  (	user_name,
	    user_email,
	    user_pass,
	    user_phone,
	    user_address,
		user_type )
	  VALUES
	  (?, ?, ?, ?, ?, ?)`,
			[
				user.user_name,
				user.user_email,
				hash,
				user.user_phone,
				user.user_address,
				0,
			],
		);
		if (result.affectedRows) {
			return "Created user successfully";
		}
	}
}

async function updateUsr(id, user) {
	const result = await db.query(
		`UPDATE user 
		SET user_name=?,
			user_email=?,
			user_pass=?,
			user_phone=?, 
			user_address=? 
			WHERE user_id=?`,
		[
			user.user_name,
			user.user_email,
			user.user_pass,
			user.user_phone,
			user.user_address,
			id,
		],
	);

	let message = "Error in updating user";

	if (result.affectedRows) {
		message = "User updated successfully";
	}

	return { message };
}

async function removeUsr(id) {
	const result = await db.query(`DELETE FROM user WHERE user_id=?`, [id]);

	let message = "Error in deleting user";

	if (result.affectedRows) {
		message = "User deleted successfully";
	}

	return { message };
}

async function login(user) {
	const use = await findUsrMail(user.user_email);
	const pass = await bcryptjs.compareSync(user.user_pass, use[0].user_pass);

	if (use && pass == true) {
		// const a =   jose;
		// console.log(a);
		// const privateKey=user;
		// const jws = jose.FlattenedEncrypt;
		// .setProtectedHeader({ alg: 'ES256' })
		// .sign(privateKey)
		// const data = user;
		// jwt.SignJWT();
		// console.log(use);
		// console.log("upas", user.user_pass);
		// console.log("pas", use[0].user_pass);
		const data = {use.user_id, use.user_email};
		const token = new jwt.sign(data, process.env.TOKEN_KEY);
		return token;
		// const secret = await jose.generateSecret("HS256");
		// console.log(await checkPassValid(user.user_pass));
		// }
		// createUsr(user);
		// return 1;
	}
}

module.exports = {
	getAllUsr,
	findUsrId,
	findUsrMail,
	findUsrName,
	createUsr,
	updateUsr,
	removeUsr,
	login,
};
