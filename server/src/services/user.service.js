/** @format */

const db = require("./db.service");
const helper = require("../utils/helper.util");
const config = require("../configs/general.config");
const emailValid = require("email-validator");
const passValid = require("joi-password-complexity");

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

// async function findUsrName(name)

async function checkEmailValid(user_email) {
	return emailValid.validate(user_email);
}

async function checkPassValid(user_pass) {
	return passValid().validate(user_pass);
}

async function checkPassUsr(user) {
	const result = await db.query(
		`SELECT user_pass FROM user WHERE user_email=?`,
		[user.user_email],
	);

	if (!result.length) {
		return false;
	}
	return true;
}

async function checkEmailUsr(user) {
	const result = await db.query(
		`SELECT user_email FROM user WHERE user_email=?`,
		[user.user_email],
	);

	if (!result.length) {
		return false;
	}
	return true;
}

async function register(user) {
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
			user.user_pass,
			user.user_phone,
			user.user_address,
			0,
		],
	);

	let message = "Error in creating user";

	if (result.affectedRows) {
		message = "Created user successfully";
	}

	return message;
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

	return message;
}

async function removeUsr(id) {
	const result = await db.query(`DELETE FROM user WHERE user_id=?`, [id]);

	let message = "Error in deleting user";

	if (result.affectedRows) {
		message = "User deleted successfully";
	}

	return message;
}

async function login(user) {
	// const result = await db.query(`DELETE FROM user WHERE user_id=?`, [id]);
	// let message = "Error in deleting user";
	// if (result.affectedRows) {
	// 	message = "User deleted successfully";
	// }
	// return {
	// 	message,
	// };
}

module.exports = {
	getAllUsr,
	findUsrId,
	register,
	updateUsr,
	removeUsr,
	login,
};
