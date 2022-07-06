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
			JOIN RAM R ON R.ID = SP.RAM_ID`,
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
			SELECT
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
			SELECT
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
			SELECT
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
			SELECT
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
			SELECT
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
	message = "THÊM KHÔNG THÀNH CÔNG";
	const oldProd = await findProNameExist(product.TEN.toUpperCase());
	if (oldProd.length != 0) {
		message = "ĐÃ CÓ SẢN PHẨM";
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
			product.ANH,
		],
	);
	if (result.affectedRows) {
		message = "THÊM THÀNH CÔNG";
		return message;
	}
}

async function updateProduct(id, product) {
	message = "SỬA KHÔNG THÀNH CÔNG";

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
				SOLUONGSP=?,
				ANH=?,
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
			product.SOLUONGSP,
			product.ANH,
			id,
		],
	);

	if (result.affectedRows) {
		message = "SỬA THÀNH CÔNG";
	}

	return message;
}

async function removeProduct(id) {
	const result = await db.query(
		`UPDATE SANPHAM SET TRANGTHAI = 1 WHERE ID = ?`,
		[id],
	);

	message = "XÓA THẤT BẠI";

	if (result.affectedRows) {
		message = "XÓA THÀNH CÔNG";
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

	message = "KÍCH HOẠT THẤT BẠI";

	if (result.affectedRows) {
		message = "KÍCH HOẠT THÀNH CÔNG";
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
	message = "THÊM KHÔNG THÀNH CÔNG";

	const oldBrand = await findBrandNameExist(brand.toString());

	if (oldBrand.length != 0) {
		message = "ĐÃ CÓ HÃNG";
		return message;
	}

	const result = await db.query(`INSERT INTO HANG TEN VALUES ?`, [
		brand.toString(),
	]);

	if (result.affectedRows) {
		message = "THÊM THÀNH CÔNG";
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
	message = "THÊM KHÔNG THÀNH CÔNG";

	const old = await findCpuNameExist(cpu.toUpperCase());

	if (old.length != 0) {
		message = "ĐÃ CÓ CPU";
		return message;
	}

	const result = await db.query(`INSERT INTO CPU (TEN) VALUES (?)`, [
		cpu.toUpperCase(),
	]);

	if (result.affectedRows) {
		message = "THÊM THÀNH CÔNG";
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
	message = "THÊM KHÔNG THÀNH CÔNG";

	const oldBrand = await findRamNameExist(ram.toUpperCase());

	if (oldBrand.length != 0) {
		message = "ĐÃ CÓ RAM";
		return message;
	}

	const result = await db.query(`INSERT INTO RAM TEN VALUES ?`, [
		ram.toUpperCase(),
	]);

	if (result.affectedRows) {
		message = "THÊM THÀNH CÔNG";
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
	message = "THÊM KHÔNG THÀNH CÔNG";

	const old = await findDriveNameExist(drive.toUpperCase());

	if (old.length != 0) {
		message = "ĐÃ CÓ Ổ CỨNG";
		return message;
	}

	const result = await db.query(`INSERT INTO OCUNG TEN VALUES ?`, [
		drive.toUpperCase(),
	]);

	if (result.affectedRows) {
		message = "THÊM THÀNH CÔNG";
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
	message = "THÊM KHÔNG THÀNH CÔNG";

	const old = await findOSNameExist(os.toUpperCase());

	if (old.length != 0) {
		message = "ĐÃ CÓ HỆ ĐIỀU HÀNH";
		return message;
	}

	const result = await db.query(`INSERT INTO HEDIEUHANH TEN VALUES ?`, [
		os.toUpperCase(),
	]);

	if (result.affectedRows) {
		message = "THÊM THÀNH CÔNG";
		return message;
	}
}

module.exports = {
	getAllPro,
	getAllProActive,
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
