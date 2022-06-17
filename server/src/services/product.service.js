/** @format */

const db = require("./db.service");
const helper = require("../utils/helper.util");
const config = require("../configs/general.config");

let message = null;

async function getAllProd(page) {
	const offset = helper.getOffset(page, config.listPerPage);
	const rows = await db.query(
		`SELECT * FROM product LIMIT ?,?`,
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

async function getAllListPro(page) {
	const offset = helper.getOffset(page, config.listPerPage);
	const rows = await db.query(
		`SELECT * FROM product LIMIT ?,?`,
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

async function findProId(id) {
	return await db.query(`SELECT * FROM product where product_id=?`, [id]);
}

async function findProName(name) {
	const value = name.replace(/ /g, "%");
	return await db.query(`SELECT * FROM product where product_name LIKE N'%${value}%'`);
}

async function addListProduct(name) {
	return await db.query(`INSERT INTO list list_name VALUES = ?`, [name]);
}

async function updateListProduct(id, name) {
	return await db.query(`UPDATE list SET list_name = ? WHERE list_id = ?`, [name, id]);
}

async function removeListProduct(id) {
	return await db.query(`UPDATE list SET list_status = 1 WHERE list_id = ?`, [id]);
}

async function createProduct(user) {
	const result = await db.query(
		`INSERT INTO user
		(user_name,
		user_email,
		user_pass,
		user_phone,
		user_address,
		user_type) 
		VALUES
		( ? , ? , ? , ? , ? , ? )`,
		[
			user.user_name,
			user.user_email,
			user.user_pass,
			user.user_phone,
			user.user_address,
			0,
		],
	);

	message = "Error in creating user";

	if (result.affectedRows) {
		message = "Created user successfully";
	}

	return message;
}

async function updateUsr(id, user) {
	const result = await db.query(
		`
				UPDATE user SET user_name = ? ,
				user_email = ? ,
				user_pass = ? ,
				user_phone = ? ,
				user_address = ?
				WHERE user_id = ? `,
		[
			user.user_name,
			user.user_email,
			user.user_pass,
			user.user_phone,
			user.user_address,
			id,
		],
	);

	message = "Error in updating user";

	if (result.affectedRows) {
		message = "User updated successfully";
	}

	return message;
}

async function removeUsr(id) {
	const result = await db.query(`
				DELETE FROM user WHERE user_id = ? `, [id]);

	message = "Error in deleting user";

	if (result.affectedRows) {
		message = "User deleted successfully";
	}

	return message;
}

module.exports = {
	register,
	updateUsr,
	removeUsr,
};