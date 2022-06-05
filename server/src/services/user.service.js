/** @format */

const db = require("./db.service");
const helper = require("../utils/helper.util");
const config = require("../configs/general.config");
const emailValid = require("email-validator");
const passValid = require("joi-password-complexity");

async function getAllUser(page = 1) {
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

async function checkEmailValid(user_email) {
	return emailValid.validate(user_email);
}

async function checkPassValid(user_pass) {
	const result = passValid().validate(user_pass);
	// const value = result.error.details[0].message;
	// const message = result.error.details[0].message;
	return {
		// message,
		// value,
		result,
	};
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

	return {
		message,
	};
}

async function updateUsr(user) {
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
			user.user_id,
		],
	);

	let message = "Error in updating user";

	if (result.affectedRows) {
		message = "User updated successfully";
	}

	return {
		message,
	};
}

async function removeUsr(user) {
	const result = await db.query(`DELETE FROM user WHERE user_id=?`, [
		user.user_id,
	]);

	let message = "Error in deleting user";

	if (result.affectedRows) {
		message = "User deleted successfully";
	}

	return {
		message,
	};
}

module.exports = {
	getAllUser,
	register,
	checkEmailUsr,
	checkEmailValid,
	checkPassUsr,
	checkPassValid,
	updateUsr,
	removeUsr,
};
