/** @format */

const db = require("./db.service");
const helper = require("../utils/helper.util");
const config = require("../configs/general.config");
const Valid = require("password-validator");

let message = null;

async function getAllPro() {
	return db.query(
		`SELECT
			SP.ID,
			H.TEN AS THUONGHIEU,
			SP.TEN,
			HDH.TEN AS HEDIEUHANH,
			C.TEN AS CPU,
			SP.THONGTINCPU,
			SP.GIA,
			O.TEN AS OCUNG,
			SP.DUNGLUONGOCUNG,
			R.TEN AS RAM,
			SP.DUNGLUONGRAM,
			SP.MOTA,
			SP.ANH,
			SP.TRANGTHAI
		FROM
			SANPHAM SP
			JOIN HEDIEUHANH HDH ON HDH.ID = SP.HEDIEUHANH_ID
			JOIN HANG H ON H.ID = SP.THUONGHIEU_ID
			JOIN CPU C ON C.ID = SP.CPU_ID
			JOIN OCUNG O ON O.ID = SP.OCUNG_ID
			JOIN RAM R ON R.ID = SP.RAM_ID
		ORDER BY SP.ID ASC`,
	);
}

async function getAllProActive(page) {
	return db.query(
		`SELECT
			SP.ID,
			H.TEN AS THUONGHIEU,
			SP.TEN,
			HDH.TEN AS HEDIEUHANH,
			C.TEN AS CPU,
			SP.THONGTINCPU,
			SP.GIA,
			O.TEN AS OCUNG,
			SP.DUNGLUONGOCUNG,
			R.TEN AS RAM,
			SP.DUNGLUONGRAM,
			SP.MOTA,
			SP.ANH,
			SP.TRANGTHAI
		FROM
			SANPHAM SP
			JOIN HEDIEUHANH HDH ON HDH.ID = SP.HEDIEUHANH_ID
			JOIN HANG H ON H.ID = SP.THUONGHIEU_ID
			JOIN CPU C ON C.ID = SP.CPU_ID
			JOIN OCUNG O ON O.ID = SP.OCUNG_ID
			JOIN RAM R ON R.ID = SP.RAM_ID
		WHERE
			SP.TRANGTHAI = 0`,
	);
}

async function findSpecProById(id) {
	return await db.query(
		`SELECT
			*
		FROM
			SANPHAM SP
		WHERE
			SP.ID = ?`,
		[id],
	);
}

async function findProById(id) {
	return await db.query(
		`SELECT
			SP.ID,
			H.TEN AS THUONGHIEU,
			SP.TEN,
			HDH.TEN AS HEDIEUHANH,
			C.TEN AS CPU,
			SP.THONGTINCPU,
			SP.GIA,
			O.TEN AS OCUNG,
			SP.DUNGLUONGOCUNG,
			R.TEN AS RAM,
			SP.DUNGLUONGRAM,
			SP.MOTA,
			SP.ANH,
			SP.TRANGTHAI
		FROM
			SANPHAM SP
			JOIN HEDIEUHANH HDH ON HDH.ID = SP.HEDIEUHANH_ID
			JOIN HANG H ON H.ID = SP.THUONGHIEU_ID
			JOIN CPU C ON C.ID = SP.CPU_ID
			JOIN OCUNG O ON O.ID = SP.OCUNG_ID
			JOIN RAM R ON R.ID = SP.RAM_ID
		WHERE
			SP.ID = ? AND
			SP.TRANGTHAI = 0`,
		[id],
	);
}

async function findProByName(name) {
	const value = name.replace(/ /g, "%");
	return await db.query(
		`SELECT
			SP.ID,
			H.TEN AS THUONGHIEU,
			SP.TEN,
			HDH.TEN AS HEDIEUHANH,
			C.TEN AS CPU,
			SP.THONGTINCPU,
			SP.GIA,
			O.TEN AS OCUNG,
			SP.DUNGLUONGOCUNG,
			R.TEN AS RAM,
			SP.DUNGLUONGRAM,
			SP.MOTA,
			SP.ANH,
			SP.TRANGTHAI
		FROM
			SANPHAM SP
			JOIN HEDIEUHANH HDH ON HDH.ID = SP.HEDIEUHANH_ID
			JOIN HANG H ON H.ID = SP.THUONGHIEU_ID
			JOIN CPU C ON C.ID = SP.CPU_ID
			JOIN OCUNG O ON O.ID = SP.OCUNG_ID
			JOIN RAM R ON R.ID = SP.RAM_ID
		WHERE
			SP.TEN LIKE N'%${value}%' OR
			H.TEN LIKE N'%${value}%' AND
			SP.TRANGTHAI = 0`,
	);
}

async function findProByBrand(id) {
	return await db.query(
		`SELECT
			SP.ID,
			H.TEN AS THUONGHIEU,
			SP.TEN,
			HDH.TEN AS HEDIEUHANH,
			C.TEN AS CPU,
			SP.THONGTINCPU,
			SP.GIA,
			O.TEN AS OCUNG,
			SP.DUNGLUONGOCUNG,
			R.TEN AS RAM,
			SP.DUNGLUONGRAM,
			SP.MOTA,
			SP.ANH,
			SP.TRANGTHAI
		FROM
			SANPHAM SP
			JOIN HEDIEUHANH HDH ON HDH.ID = SP.HEDIEUHANH_ID
			JOIN HANG H ON H.ID = SP.THUONGHIEU_ID
			JOIN CPU C ON C.ID = SP.CPU_ID
			JOIN OCUNG O ON O.ID = SP.OCUNG_ID
			JOIN RAM R ON R.ID = SP.RAM_ID
		WHERE
			H.ID = ? AND
			SP.TRANGTHAI = 0`,
		[id],
	);
}

async function findProByCpu(id) {
	return await db.query(
		`SELECT
			SP.ID,
			H.TEN AS THUONGHIEU,
			SP.TEN,
			HDH.TEN AS HEDIEUHANH,
			C.TEN AS CPU,
			SP.THONGTINCPU,
			SP.GIA,
			O.TEN AS OCUNG,
			SP.DUNGLUONGOCUNG,
			R.TEN AS RAM,
			SP.DUNGLUONGRAM,
			SP.MOTA,
			SP.ANH,
			SP.TRANGTHAI
		FROM
			SANPHAM SP
			JOIN HEDIEUHANH HDH ON HDH.ID = SP.HEDIEUHANH_ID
			JOIN HANG H ON H.ID = SP.THUONGHIEU_ID
			JOIN CPU C ON C.ID = SP.CPU_ID
			JOIN OCUNG O ON O.ID = SP.OCUNG_ID
			JOIN RAM R ON R.ID = SP.RAM_ID
		WHERE
			C.ID = ? AND
			SP.TRANGTHAI = 0`,
		[id],
	);
}

async function findProByRam(id) {
	return await db.query(
		`SELECT
			SP.ID,
			H.TEN AS THUONGHIEU,
			SP.TEN,
			HDH.TEN AS HEDIEUHANH,
			C.TEN AS CPU,
			SP.THONGTINCPU,
			SP.GIA,
			O.TEN AS OCUNG,
			SP.DUNGLUONGOCUNG,
			R.TEN AS RAM,
			SP.DUNGLUONGRAM,
			SP.MOTA,
			SP.ANH,
			SP.TRANGTHAI
		FROM
			SANPHAM SP
			JOIN HEDIEUHANH HDH ON HDH.ID = SP.HEDIEUHANH_ID
			JOIN HANG H ON H.ID = SP.THUONGHIEU_ID
			JOIN CPU C ON C.ID = SP.CPU_ID
			JOIN OCUNG O ON O.ID = SP.OCUNG_ID
			JOIN RAM R ON R.ID = SP.RAM_ID
		WHERE
			R.ID = ? AND
			SP.TRANGTHAI = 0`,
		[id],
	);
}

async function findProByDrive(id) {
	return await db.query(
		`SELECT
			SP.ID,
			H.TEN AS THUONGHIEU,
			SP.TEN,
			HDH.TEN AS HEDIEUHANH,
			C.TEN AS CPU,
			SP.THONGTINCPU,
			SP.GIA,
			O.TEN AS OCUNG,
			SP.DUNGLUONGOCUNG,
			R.TEN AS RAM,
			SP.DUNGLUONGRAM,
			SP.MOTA,
			SP.ANH,
			SP.TRANGTHAI
		FROM
			SANPHAM SP
			JOIN HEDIEUHANH HDH ON HDH.ID = SP.HEDIEUHANH_ID
			JOIN HANG H ON H.ID = SP.THUONGHIEU_ID
			JOIN CPU C ON C.ID = SP.CPU_ID
			JOIN OCUNG O ON O.ID = SP.OCUNG_ID
			JOIN RAM R ON R.ID = SP.RAM_ID
		WHERE
			O.ID = ? AND
			SP.TRANGTHAI = 0`,
		[id],
	);
}

async function findProByOS(id) {
	return await db.query(
		`SELECT
			SP.ID,
			H.TEN AS THUONGHIEU,
			SP.TEN,
			HDH.TEN AS HEDIEUHANH,
			C.TEN AS CPU,
			SP.THONGTINCPU,
			SP.GIA,
			O.TEN AS OCUNG,
			SP.DUNGLUONGOCUNG,
			R.TEN AS RAM,
			SP.DUNGLUONGRAM,
			SP.MOTA,
			SP.ANH,
			SP.TRANGTHAI
		FROM
			SANPHAM SP
			JOIN HEDIEUHANH HDH ON HDH.ID = SP.HEDIEUHANH_ID
			JOIN HANG H ON H.ID = SP.THUONGHIEU_ID
			JOIN CPU C ON C.ID = SP.CPU_ID
			JOIN OCUNG O ON O.ID = SP.OCUNG_ID
			JOIN RAM R ON R.ID = SP.RAM_ID
		WHERE
			HDH.ID = ? AND
			SP.TRANGTHAI = 0`,
		[id],
	);
}

async function findProNameExist(name) {
	return await db.query(`SELECT TEN FROM SANPHAM WHERE TEN = ?`, [name]);
}

async function addProduct(product) {
	message = "TH??M KH??NG TH??NH C??NG";
	const oldProd = await findProNameExist(product.TEN.toUpperCase());
	if (oldProd.length != 0) {
		message = "???? C?? S???N PH???M";
		return message;
	}
	const result = await db.query(
		`INSERT INTO SANPHAM
			(TEN,
			HEDIEUHANH_ID,
			THUONGHIEU_ID,
			CPU_ID,
			THONGTINCPU,
			GIA,
			OCUNG_ID,
			DUNGLUONGOCUNG,
			RAM_ID,
			DUNGLUONGRAM,
			MOTA,
			ANH,
			TRANGTHAI)
		VALUES
			(?,?,?,?,?,?,?,?,?,?,?,?,0)`,
		[
			product.TEN.toUpperCase(),
			product.HEDIEUHANH_ID,
			product.THUONGHIEU_ID,
			product.CPU_ID,
			product.THONGTINCPU.toUpperCase(),
			product.GIA,
			product.OCUNG_ID,
			product.DUNGLUONGOCUNG,
			product.RAM_ID,
			product.DUNGLUONGRAM,
			product.MOTA.toUpperCase(),
			product.ANH.replace("C:\\fakepath\\", " ").trimStart(),
		],
	);
	if (result.affectedRows) {
		message = "TH??M TH??NH C??NG";
		return message;
	}
}

async function updateProduct(id, product) {
	message = "S???A KH??NG TH??NH C??NG";

	const result = await db.query(
		`UPDATE SANPHAM
			SET
				TEN=?,
				HEDIEUHANH_ID=?,
				THUONGHIEU_ID=?,
				CPU_ID=?,
				THONGTINCPU=?,
				GIA=?,
				OCUNG_ID=?,
				DUNGLUONGOCUNG=?,
				RAM_ID=?,
				DUNGLUONGRAM=?,
				MOTA=?,
				ANH=?
		WHERE
			ID = ?`,
		[
			product.TEN.toUpperCase(),
			product.HEDIEUHANH_ID,
			product.THUONGHIEU_ID,
			product.CPU_ID,
			product.THONGTINCPU.toUpperCase(),
			product.GIA,
			product.OCUNG_ID,
			product.DUNGLUONGOCUNG,
			product.RAM_ID,
			product.DUNGLUONGRAM,
			product.MOTA.toUpperCase(),
			product.ANH.replace("C:\\fakepath\\", " ").trimStart(),
			id,
		],
	);

	if (result.affectedRows) {
		message = "S???A TH??NH C??NG";
	}

	return message;
}

async function removeProduct(id) {
	const result = await db.query(
		`UPDATE SANPHAM SET TRANGTHAI = 1 WHERE ID = ?`,
		[id],
	);

	message = "X??A TH???T B???I";

	if (result.affectedRows) {
		message = "X??A TH??NH C??NG";
	}

	return {
		message,
	};
}

async function activeProduct(id) {
	const result = await db.query(
		`UPDATE SANPHAM SET TRANGTHAI = 0 WHERE ID = ?`,
		[id],
	);

	message = "K??CH HO???T TH???T B???I";

	if (result.affectedRows) {
		message = "K??CH HO???T TH??NH C??NG";
	}

	return {
		message,
	};
}

async function getAllBrand() {
	return await db.query(`SELECT * FROM HANG`);
}

async function findBrandNameExist(brand) {
	return await db.query(`SELECT * FROM HANG WHERE TEN = ?`, [brand]);
}

async function addBrand(brand) {
	message = "TH??M KH??NG TH??NH C??NG";

	const oldBrand = await findBrandNameExist(brand.toUpperCase());

	if (oldBrand.length != 0) {
		message = "???? C?? H??NG";
		return message;
	}

	const result = await db.query(`INSERT INTO HANG (TEN) VALUES (?)`, [
		brand.toUpperCase(),
	]);

	if (result.affectedRows) {
		message = "TH??M TH??NH C??NG";
		return message;
	}
}

async function getAllCpu() {
	return await db.query(`SELECT * FROM CPU`);
}

async function findCpuNameExist(cpu) {
	return await db.query(`SELECT * FROM CPU WHERE TEN = ?`, [cpu]);
}

async function addCpu(cpu) {
	message = "TH??M KH??NG TH??NH C??NG";

	const old = await findCpuNameExist(cpu.toUpperCase());

	if (old.length != 0) {
		message = "???? C?? CPU";
		return message;
	}

	const result = await db.query(`INSERT INTO CPU (TEN) VALUES (?)`, [
		cpu.toUpperCase(),
	]);

	if (result.affectedRows) {
		message = "TH??M TH??NH C??NG";
		return message;
	}
}

async function getAllRam() {
	return await db.query(`SELECT * FROM RAM`);
}

async function findRamNameExist(ram) {
	return await db.query(`SELECT * FROM RAM WHERE TEN = ?`, [ram]);
}

async function addRam(ram) {
	message = "TH??M KH??NG TH??NH C??NG";

	const oldBrand = await findRamNameExist(ram.toUpperCase());

	if (oldBrand.length != 0) {
		message = "???? C?? RAM";
		return message;
	}

	const result = await db.query(`INSERT INTO RAM (TEN) VALUES (?)`, [
		ram.toUpperCase(),
	]);

	if (result.affectedRows) {
		message = "TH??M TH??NH C??NG";
		return message;
	}
}

async function getAllDrive() {
	return await db.query(`SELECT * FROM OCUNG`);
}

async function findDriveNameExist(ram) {
	return await db.query(`SELECT * FROM OCUNG WHERE TEN = ?`, [ram]);
}

async function addDrive(drive) {
	message = "TH??M KH??NG TH??NH C??NG";

	const old = await findDriveNameExist(drive.toUpperCase());

	if (old.length != 0) {
		message = "???? C?? ??? C???NG";
		return message;
	}

	const result = await db.query(`INSERT INTO OCUNG (TEN) VALUES (?)`, [
		drive.toUpperCase(),
	]);

	if (result.affectedRows) {
		message = "TH??M TH??NH C??NG";
		return message;
	}
}

async function getAllOS() {
	return await db.query(`SELECT * FROM HEDIEUHANH`);
}

async function findOSNameExist(os) {
	return await db.query(`SELECT * FROM HEDIEUHANH WHERE TEN = ?`, [os]);
}

async function addOS(os) {
	message = "TH??M KH??NG TH??NH C??NG";

	const old = await findOSNameExist(os.toUpperCase());

	if (old.length != 0) {
		message = "???? C?? H??? ??I???U H??NH";
		return message;
	}

	const result = await db.query(`INSERT INTO HEDIEUHANH (TEN) VALUES (?)`, [
		os.toUpperCase(),
	]);

	if (result.affectedRows) {
		message = "TH??M TH??NH C??NG";
		return message;
	}
}

module.exports = {
	getAllPro,
	getAllProActive,
	findSpecProById,
	findProById,
	findProByName,
	findProByBrand,
	findProByCpu,
	findProByRam,
	findProByOS,
	findProByDrive,
	getAllBrand,
	addBrand,
	getAllCpu,
	addCpu,
	getAllRam,
	addRam,
	getAllDrive,
	addDrive,
	getAllOS,
	addOS,
	addProduct,
	updateProduct,
	removeProduct,
	activeProduct,
};
