/** @format */

const db = require("./db.service");
const helper = require("../utils/helper.util");
const config = require("../configs/general.config");
const Valid = require("password-validator");
const multer = require('multer');
const upload = multer({
	dest: '/src/uploads/'
});

let message = null;

async function getAllPro() {
	// const offset = helper.getOffset(page, config.listPerPage);
	// const rows = await db.query(
	// 	`SELECT * FROM list LIMIT ?,?`,
	// 	[offset, config.listPerPage],
	// );
	// const data = helper.emptyOrRows(rows);
	// const meta = {
	// 	page,
	// };

	// return {
	// 	data,
	// 	meta,
	// };
	return db.query(
		`SELECT
			SP.ID,
			DM.TEN AS LOAI,
			H.TEN AS HANG,
			SP.TEN AS TENSP,
			CT.CPU,
			CT.RAM,
			CT.HEDIEUHANH,
			CT.OCUNG,
			CT.ANH,
			CT.MOTA,
			SP.TRANGTHAI
		FROM
			SANPHAM SP
			JOIN DANHMUC DM ON DM.ID = SP.DANHMUCSP
			JOIN CHITIET_SP CT ON SP.ID = CT.SANPHAM_ID
			JOIN HANG H ON H.ID = SP.HANGSP`
	);
}

async function getAllProActive(page) {
	return db.query(
		`SELECT
			SP.ID,
			DM.TEN AS LOAI,
			H.TEN AS HANG,
			SP.TEN AS TENSP,
			CT.CPU,
			CT.RAM,
			CT.HEDIEUHANH,
			CT.OCUNG,
			CT.ANH,
			CT.MOTA,
			SP.TRANGTHAI
		FROM
			SANPHAM SP
			JOIN DANHMUC DM ON DM.ID = SP.DANHMUCSP
			JOIN CHITIET_SP CT ON SP.ID = CT.SANPHAM_ID
			JOIN HANG H ON H.ID = SP.HANGSP
		WHERE
			SP.TRANGTHAI = 0`
	);
}

async function getAllProNotActive(page) {
	return db.query(
		`SELECT
			SP.ID,
			DM.TEN AS LOAI,
			H.TEN AS HANG,
			SP.TEN AS TENSP,
			CT.CPU,
			CT.RAM,
			CT.HEDIEUHANH,
			CT.OCUNG,
			CT.ANH,
			CT.MOTA,
			SP.TRANGTHAI
		FROM
			SANPHAM SP
			JOIN DANHMUC DM ON DM.ID = SP.DANHMUCSP
			JOIN CHITIET_SP CT ON SP.ID = CT.SANPHAM_ID
			JOIN HANG H ON H.ID = SP.HANGSP
		WHERE
			SP.TRANGTHAI = 1`
	);
}

async function findPro(name) {
	const value = name.replace(/ /g, "%");
	return await db.query(
		`SELECT
			SP.ID,
			DM.TEN AS LOAI,
			H.TEN AS HANG,
			SP.TEN AS TENSP,
			CT.CPU,
			CT.RAM,
			CT.HEDIEUHANH,
			CT.OCUNG,
			CT.ANH,
			CT.MOTA,
			SP.TRANGTHAI
		FROM
			SANPHAM SP
			JOIN DANHMUC DM ON DM.ID = SP.DANHMUCSP
			JOIN CHITIET_SP CT ON SP.ID = CT.SANPHAM_ID
			JOIN HANG H ON H.ID = SP.HANGSP
		WHERE
			SP.TEN LIKE N'%${value}% OR
			H.TEN LIKE N'%${value}% AND
			SP.TRANGTHAI = 0`);
}

async function findProByBrand(id) {
	return await db.query(
		`SELECT
			SP.ID,
			DM.TEN AS LOAI,
			H.TEN AS HANG,
			SP.TEN AS TENSP,
			CT.CPU,
			CT.RAM,
			CT.HEDIEUHANH,
			CT.OCUNG,
			CT.ANH,
			CT.MOTA,
			SP.TRANGTHAI
		FROM
			SANPHAM SP
			JOIN DANHMUC DM ON DM.ID = SP.DANHMUCSP
			JOIN CHITIET_SP CT ON SP.ID = CT.SANPHAM_ID
			JOIN HANG H ON H.ID = SP.HANGSP
		WHERE
			H.ID = ? AND
			SP.TRANGTHAI = 0`, [id]);
}

async function findProByCategory(id) {
	return await db.query(
		`SELECT
			SP.ID,
			DM.TEN AS LOAI,
			H.TEN AS HANG,
			SP.TEN AS TENSP,
			CT.CPU,
			CT.RAM,
			CT.HEDIEUHANH,
			CT.OCUNG,
			CT.ANH,
			CT.MOTA,
			SP.TRANGTHAI
		FROM
			SANPHAM SP
			JOIN DANHMUC DM ON DM.ID = SP.DANHMUCSP
			JOIN CHITIET_SP CT ON SP.ID = CT.SANPHAM_ID
			JOIN HANG H ON H.ID = SP.HANGSP
		WHERE
			DM.ID = ? AND
			SP.TRANGTHAI = 0`, [id]);
}

async function findProNameExist(name) {
	return await db.query(`SELECT TEN FROM SANPHAM WHERE TEN = ?`, [name]);
}

async function addProduct(product) {
	message = "THÊM KHÔNG THÀNH CÔNG";

	const oldProd = await findProNameExist(product.TEN);

	if (oldProd.length != 0) {
		message = "ĐÃ CÓ SẢN PHẨM";
	}

	const result = await db.query(
		`INSERT INTO SANPHAM
			(TEN, DANHMUCSP, HANGSP, TRANGTHAI)
		VALUES
			(?,?,?,0)`,
		[product.TEN, product.DANHMUCSP, product.HANGSP]);

	if (result.affectedRows) {
		message = "THÊM THÀNH CÔNG";
	}

	return message;
}

async function updateProduct(id, product) {
	message = "SỬA KHÔNG THÀNH CÔNG";

	const result = await db.query(
		`UPDATE SANPHAM 
			SET TEN = ?, DANHMUCSP = ?, HANGSP  = ?
		WHERE 
			ID = ?`,
		[product.TEN, product.DANHMUCSP, product.HANGSP, product.ID]);

	if (result.affectedRows) {
		message = "SỬA THÀNH CÔNG";
	}

	return message;
}

async function removeProduct(id) {
	return await db.query(`UPDATE SANPHAM SET TRANGTHAI = 1 WHERE ID = ?`, [id]);
}

async function getAllBrand() {
	return await db.query(`SELECT * FROM HANG`)
}

async function getAllBrandActive() {
	return await db.query(`SELECT * FROM HANG WHERE TRANGTHAI = 0`)
}

async function getAllBrandNotTActive() {
	return await db.query(`SELECT * FROM HANG WHERE TRANGTHAI = 1`)
}

async function findBrandNameExist(brand) {
	return await db.query(`SELECT * FROM SANPHAM WHERE TEN = ?`, [brand]);
}

async function addBrand(brand) {
	message = "THÊM KHÔNG THÀNH CÔNG";
	const oldBrand = await findBrandNameExist(brand.TEN);

	if (oldBrand.length != 0) {
		message = "ĐÃ CÓ HÃNG";
	}

	const result = await db.query(
		`INSERT INTO HANG
		(TEN, TRANGTHAI)
		VALUES
		(?,0)`,
		[brand]);

	if (result.affectedRows) {
		message = "THÊM THÀNH CÔNG";
	}

	return message;

}

async function updatedBrand(id, brand) {
	message = "SỬA KHÔNG THÀNH CÔNG";

	const result = await db.query(
		`UPDATE HANG 
			SET TEN = ?
		WHERE 
			ID = ?`,
		[brand, id]);

	if (result.affectedRows) {
		message = "SỬA THÀNH CÔNG";
	}

	return message;
}

async function removeBrand(id) {
	return await db.query(`UPDATE HANG SET TRANGTHAI = 1 WHERE ID = ?`, [id]);
}

async function addProductDetails(product) {
	message = "THÊM KHÔNG THÀNH CÔNG";
	const result = await db.query(
		`INSERT INTO CHITIET_SP
		(SANPHAM_ID, CPU, RAM, HEDIEUHANH, OCUNG, ANH, MOTA, GIA)
		VALUES
		(?,?,?,?,?,?,?,?)`,
		[
			product.ID,
			product.CPU,
			product.RAM,
			product.HEDIEUHANH,
			product.OCUNG,
			product.ANH,
			product.MOTA,
			product.GIA
		]);

	if (result.affectedRows) {
		message = "THÊM THÀNH CÔNG";
	}

	return message;
}

async function updateProductDetails(id, product) {
	message = "SỬA KHÔNG THÀNH CÔNG";
	const result = await db.query(
		`UPDATE CHITIET_SP
			SET CPU = ?, RAM = ?, HEDIEUHANH = ?, OCUNG = ?, ANH = ?, MOTA = ?, GIA = ?
		WHERE SANPHAM_ID = ?)`,
		[
			product.CPU,
			product.RAM,
			product.HEDIEUHANH,
			product.OCUNG,
			product.ANH,
			product.MOTA,
			product.GIA,
			id,
		]);

	if (result.affectedRows) {
		message = "SỬA THÀNH CÔNG";
	}

	return message;
}

async function findCategoryNameExist(category) {
	return await db.query(`SELECT * FROM DANHMUC WHERE TEN = ?`, [category]);
}

async function addCategory(category) {
	message = "THÊM KHÔNG THÀNH CÔNG";
	const oldBrand = await findCategoryNameExist(category);

	if (oldBrand.length != 0) {
		message = "ĐÃ CÓ HÃNG";
	}

	const result = await db.query(
		`INSERT INTO DANHMUC
		(TEN, TRANGTHAI)
		VALUES
		(?,0)`,
		[category]);

	if (result.affectedRows) {
		message = "THÊM THÀNH CÔNG";
	}

	return message;

}

async function updateCategory(id, category) {
	message = "SỬA KHÔNG THÀNH CÔNG";

	const result = await db.query(
		`UPDATE DANHMUC 
		SET TEN = ?
	WHERE 
		ID = ?`,
		[category, id]);

	if (result.affectedRows) {
		message = "SỬA THÀNH CÔNG";
	}

	return message;
}

async function removeCategory(id) {
	return await db.query(`UPDATE DANHMUC SET TRANGTHAI = 1 WHERE ID = ?`, [id]);
}

async function getAllCategory() {
	return await db.query(`SELECT * FROM DANHMUC`)
}

async function getAllCategoryActive() {
	return await db.query(`SELECT * FROM DANHMUC WHERE TRANGTHAI = 0`)
}

async function getAllCategoryNotTActive() {
	return await db.query(`SELECT * FROM DANHMUC WHERE TRANGTHAI = 1`)
}


module.exports = {
	getAllPro,
	getAllProActive,
	getAllProNotActive,
	findPro,
	findProByBrand,
	findProByCategory,
	addCategory,
	updateCategory,
	removeCategory,
	addProduct,
	updateProduct,
	removeProduct,
	getAllBrand,
	getAllBrandActive,
	getAllBrandNotTActive,
	addBrand,
	updatedBrand,
	removeBrand,
	addProductDetails,
	updateProductDetails,
	getAllCategory,
	getAllCategoryActive,
	getAllCategoryNotTActive
};