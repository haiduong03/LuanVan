/** @format */

const db = require("./db.service");
const helper = require("../utils/helper.util");
const config = require("../configs/general.config");
const Valid = require("password-validator");

let message = null;

async function getAllListPro(page) {
	const offset = helper.getOffset(page, config.listPerPage);
	const rows = await db.query(
		`SELECT * FROM list LIMIT ?,?`,
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

async function getAllListProActive(page) {
	const offset = helper.getOffset(page, config.listPerPage);
	const rows = await db.query(
		`SELECT * FROM list WHERE list_status = 0 LIMIT ?,?`,
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

async function getAllListProNotActive(page) {
	const offset = helper.getOffset(page, config.listPerPage);
	const rows = await db.query(
		`SELECT * FROM list WHERE list_status = 1 LIMIT ?,?`,
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

async function findListId(id) {
	return await db.query(`SELECT * FROM list where product_id=?`, [id]);
}

async function findListName(name) {
	return await db.query(`SELECT * FROM list where list_name = ?'`, [name]);
}

async function addListProduct(name) {
	const oldProd = await findListName(name);

	if (!name) {
		message = "Invalid list name";
		return message;
	}

	if (oldProd != 0) {
		message = "Already have";
		return message;
	}

	await db.query(`INSERT INTO list list_name VALUES = ?`, [name]);
	message = "Success";
	return message;
}

async function updateListProduct(id, name) {
	if (!name) {
		message = "Invalid list name";
		return message;
	}
	return await db.query(`UPDATE list SET list_name = ? WHERE list_id = ?`, [name, id]);
}

async function removeListProduct(id) {
	return await db.query(`UPDATE list SET list_status = 1 WHERE list_id = ?`, [id]);
}

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

async function getAllProdActive(page) {
	const offset = helper.getOffset(page, config.listPerPage);
	const rows = await db.query(
		`SELECT * FROM product WHERE product_status = 0 LIMIT ?,?`,
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

async function getAllProdNotActive(page) {
	const offset = helper.getOffset(page, config.listPerPage);
	const rows = await db.query(
		`SELECT * FROM product WHERE product_status = 1 LIMIT ?,?`,
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

async function checkPriceValid(price) {
	const constructor = new Valid()

		// Add properties to it
		.is()
		.min(6) // Minimum length 6
		.is()
		.max(12) // Maximum length 12

	return constructor.validate(phone); // true or false
}

async function findProId(id) {
	return await db.query(`SELECT * FROM product where product_id=?`, [id]);
}

async function findProName(name) {
	const value = name.replace(/ /g, "%");
	return await db.query(`SELECT * FROM product where product_name LIKE N'%${value}%'`);
}

async function createProduct(product) {
	const oldPro = await findProName(product.product_name);
	const price = await checkPriceValid((product.price).toString())

	if (
		!product.product_name ||
		!product.product_decryption ||
		!product.product_price ||
		!product.product_img ||
		!product.list_id
	) {
		message = "Invalid product";
		return message;
	}

	if (price == false) {
		message = "Price must be number, min = 6, max = 13";
		return message;
	}

	if (oldPro != 0) {
		message = "Product already exists";
		return message;
	}

	const result = await db.query(
		`INSERT INTO product
		( 	product_name,
			product_decryption,
			product_price,
			product_img,
			list_id,
			product_status  )
		VALUES
		( ? , ? , ? , ?)`,
		[
			product.product_name,
			product.product_decryption,
			product.product_price,
			product.product_img,
			product.list_id,
			0,
		],
	);

	message = "Error in creating product";

	if (result.affectedRows) {
		message = "Created product successfully";
	}

	return message;
}

async function updatedProduct(product) {
	const result = await db.query(
		`UPDATE product 
		SET product_name=?,
		product_decryption=?,
		product_price=?,
		product_img=?,
		list_id=?
		WHERE product_id =?`,
		[
			product.product_name,
			product.product_decryption,
			product.product_price,
			product.product_img,
			product.list_id,
			product.product_id,
		],
	);

	message = "Error in updating product";

	if (result.affectedRows) {
		message = "Product updated successfully";
	}

	return {
		message,
	};
}

async function removeProduct(id) {
	const result = await db.query(
		`UPDATE product 
		SET product_status = 1 WHERE product_id=?`,
		[id],
	);

	message = "Error in deleting product";

	if (result.affectedRows) {
		message = "Product deleted successfully";
	}

	return {
		message,
	};
}


module.exports = {
	getAllListPro,
	getAllListProActive,
	getAllListProNotActive,
	findListId,
	findListName,
	addListProduct,
	updateListProduct,
	removeListProduct,
	getAllProd,
	getAllProdActive,
	getAllProdNotActive,
	findProId,
	findProName,
	createProduct,
	updatedProduct,
	removeProduct
};