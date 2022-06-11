/** @format */

const db = require("./db.service");
const helper = require("../utils/helper.util");
const config = require("../configs/general.config");
const emailValid = require("email-validator");
const passValid = require("joi-password-complexity");

async function getAllAdm(page) {
	const offset = helper.getOffset(page, config.listPerPage);
	const rows = await db.query(
		`SELECT * FROM user WHERE user_type=1 LIMIT ?,?`,
		[offset, config.listPerPage],
	);
	const data = helper.emptyOrRows(rows);
	const meta = {
		page,
	};

	return {
		data,
		meta,
	};
}

async function findAdmId(id) {
	return await db.query(`SELECT * FROM user where user_id=?`, [id]);
}

async function findAdmMail(email) {
	return await db.query(`SELECT * FROM user where user_email=?`, [email]);
}

async function findAdmName(name) {
	return await db.query(`SELECT * FROM user where user_name LIKE N'%=?%'`, [
		name,
	]);
}

async function checkEmailValid(email) {
	return emailValid.validate(email);
}

async function checkPassValid(password) {
	return passValid().validate(password);
}

async function checkPassUsr(user) {
	return await db.query(`SELECT user_pass FROM user WHERE user_email=?`, [
		user.user_pass,
		user.user_email,
	]);
}

async function checkEmailUsr(email) {
	return await db.query(`SELECT user_email FROM user WHERE user_email=?`);
}

async function createAdm(user) {
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
			1,
		],
	);

	let message = "Error in creating user";

	if (result.affectedRows) {
		message = "Created user successfully";
	}

	return message;
}

async function updateAdm(id, user) {
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

async function removeAdm(id) {
	const result = await db.query(`DELETE FROM user WHERE user_id=?`, [id]);

	let message = "Error in deleting user";

	if (result.affectedRows) {
		message = "User deleted successfully";
	}

	return message;
}

module.exports = {
	getAllAdm,
	createAdm,
	updateAdm,
	removeAdm,
	findAdmId,
	findAdmMail,
};
