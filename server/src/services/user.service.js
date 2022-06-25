/** @format */

const db = require("./db.service");
const helper = require("../utils/helper.util");
const config = require("../configs/general.config");
const emailValid = require("email-validator");
const Valid = require("password-validator");
require("dotenv").config();
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

let message = null;

let listToken = [];

async function getAllUsr(page) {
	const offset = helper.getOffset(page, config.listPerPage);
	const rows = await db.query(`SELECT * FROM user WHERE user_type = 0 LIMIT ?,?`, [
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

async function getAllUsrActive(page) {
	const offset = helper.getOffset(page, config.listPerPage);
	const rows = await db.query(`SELECT * FROM user WHERE user_type = 0 AND user_status=0 LIMIT ?,?`, [
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

async function getAllUsrNotActive(page) {
	const offset = helper.getOffset(page, config.listPerPage);
	const rows = await db.query(`SELECT * FROM user WHERE user_type = 0 AND user_status = 1 LIMIT ?,?`, [
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
	return await db.query(`SELECT * FROM user where user_type = 0 AND user_id=?`, [id]);
}

async function findUsrMail(email) {
	if (await checkEmailValid(email) == false) {
		message = "Invalid email address";
		return message
	}
	return await db.query(`SELECT * FROM user where user_type = 0 AND user_email=?`, [email]);
}

async function findUsrName(name) {
	const value = name.replace(/ /g, "%");
	return await db.query(
		`SELECT * FROM user where user_type = 0 AND user_name LIKE N'%${value}%'`,
	);
}

async function findUsrPhone(phone) {
	return await db.query(`SELECT * FROM user where  user_type = 0 AND  user_email=?`, [phone]);
}

async function findUsrNotActive() {
	return await db.query(`SELECT * FROM user where  user_type = 0 AND user_status = 1 `);
}

async function findUsrActive() {
	return await db.query(`SELECT * FROM user where user_type = 0 AND user_status = 0`);
}

async function checkEmailValid(email) {
	return emailValid.validate(email);
}

async function checkPassValid(password) {
	const constructor = new Valid()

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

async function checkPhoneValid(phone) {
	const constructor = new Valid()

		// Add properties to it
		.is()
		.min(10) // Minimum length 10
		.is()
		.max(13) // Maximum length 1

	return constructor.validate(phone); // true or false
}

async function createUsr(user) {
	const oldUsr = await findUsrMail(user.user_email);
	const email = await checkEmailValid(user.user_email);
	const pass = await checkPassValid(user.user_pass);
	const phone = await checkPhoneValid((user.user_phone).toString());

	if (
		!user.user_name ||
		!user.user_email ||
		!user.user_pass ||
		!user.user_phone ||
		!user.user_address
	) {
		message = "Invalid value input";
		return {
			message,
			user
		};
	}

	if (oldUsr.length != 0 && oldUsr[0].user_status == 0) {
		message = "Already have user";
		return {
			message,
			user
		};
	}

	if (phone == false) {
		message = "Phone must be number, must have min = 10, max =13";
		return {
			message,
			user
		};
	}

	if (email == false) {
		message = "Email must have type 'abc@email.com'";
		return {
			message,
			user
		};
	}

	if (pass == false) {
		message =
			"Password must have min = 8, max =100, uppercase letters, lowercase letters, at least 2 digits, no space";
		return {
			message,
			user
		};
	}

	if (oldUsr == 0 && pass == true && email == true) {
		const salt = bcryptjs.genSaltSync(parseInt(process.env.SALT));
		const hash = bcryptjs.hashSync(user.user_pass, salt);
		const result = await db.query(
			`INSERT INTO  user
	  (	user_name,
	    user_email,
	    user_pass,
	    user_phone,
	    user_address,
		user_type,
		user_status)
	  VALUES
	  (?, ?, ?, ?, ?, 0, 0)`,
			[
				user.user_name,
				user.user_email,
				hash,
				user.user_phone,
				user.user_address,
			],
		);

		if (result.affectedRows) {
			message = "Created user successfully";
			return {
				message,
			};
		}
	}
}

async function updateUsr(id, user) {

}

async function removeUsr(id) {
	const result = await db.query(
		`UPDATE user 
		SET user_status = 1 WHERE user_type = 0 AND user_id=?`,
		[id],
	);

	message = "Error in deleting user";

	if (result.affectedRows) {
		message = "User deleted successfully";
	}

	return {
		message,
	};
}

module.exports = {
	getAllUsr,
	getAllUsrActive,
	getAllUsrNotActive,
	findUsrId,
	findUsrMail,
	findUsrName,
	findUsrPhone,
	findUsrNotActive,
	findUsrActive,
	createUsr,
	updateUsr,
	removeUsr,
};