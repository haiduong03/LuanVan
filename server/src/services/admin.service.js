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

async function getAllAdm() {
	// const offset = helper.getOffset(page, config.listPerPage);
	// const rows = await db.query(`SELECT * FROM user WHERE user_type = 1 LIMIT ?,?`, [
	// 	offset,
	// 	config.listPerPage,
	// ]);
	// const data = helper.emptyOrRows(rows);
	// const meta = {
	// 	page,
	// };

	// return {
	// 	data,
	// 	meta,
	// };
	return await db.query(`SELECT * FROM NGUOIDUNG WHERE LOAI = 1`);
}

async function getAllAdmActive() {
	// const offset = helper.getOffset(page, config.listPerPage);
	// const rows = await db.query(`SELECT * FROM user WHERE user_type = 1 AND user_status = 0 LIMIT ?,?`, [
	// 	offset,
	// 	config.listPerPage,
	// ]);
	// const data = helper.emptyOrRows(rows);
	// const meta = {
	// 	page,
	// };

	// return {
	// 	data,
	// 	meta,
	// };
	return await db.query(
		`SELECT * FROM NGUOIDUNG WHERE LOAI = 1 AND TRANGTHAI = 0`,
	);
}

async function getAllAdmNotActive() {
	// const offset = helper.getOffset(page, config.listPerPage);
	// const rows = await db.query(`SELECT * FROM user WHERE user_type = 1 AND user_status = 1 LIMIT ?,?`, [
	// 	offset,
	// 	config.listPerPage,
	// ]);
	// const data = helper.emptyOrRows(rows);
	// const meta = {
	// 	page,
	// };

	// return {
	// 	data,
	// 	meta,
	// };
	return await db.query(
		`SELECT * FROM NGUOIDUNG WHERE LOAI = 1 AND TRANGTHAI = 1`,
	);
}

async function findAdmId(id) {
	return await db.query(`SELECT * FROM NGUOIDUNG WHERE LOAI = 1 AND ID = ?`, [
		id,
	]);
}

async function findAdmMail(email) {
	if ((await checkEmailValid(email)) == false) {
		message = "EMAIL PHẢI CÓ DẠNG ABC@EMAIL.COM";
		return message;
	}
	return await db.query(
		`SELECT * FROM NGUOIDUNG WHERE LOAI = 1 AND EMAIL = ?`,
		[email],
	);
}

async function findAdmName(name) {
	const value = name.replace(/ /g, "%");
	return await db.query(
		`SELECT * FROM NGUOIDUNG WHERE LOAI = 1 AND TEN LIKE N'%${value}%'`,
	);
}

async function findAdmPhone(phone) {
	return await db.query(
		`SELECT * FROM NGUOIDUNG WHERE LOAI = 1 AND  SODIENTHOAI = ?`,
		[phone],
	);
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
		.max(13); // Maximum length 13

	return constructor.validate(phone); // true or false
}

async function createAdm(user) {
	const oldUsr = await findAdmMail(user.EMAIL);
	const email = await checkEmailValid(user.EMAIL);
	const pass = await checkPassValid(user.PASS);
	const phone = await checkPhoneValid(user.SODIENTHOAI.toString());
	message = "TẠO THẤT BẠI";

	if (
		!user.TEN ||
		!user.EMAIL ||
		!user.PASS ||
		!user.SODIENTHOAI ||
		!user.DIACHI
	) {
		message = "KHÔNG ĐƯỢC ĐỂ TRỐNG";
		return {
			message,
		};
	}

	if (oldUsr.length != 0 && oldUsr[0].TRANGTHAI == 0) {
		message = "ĐÃ CÓ NGƯỜI DÙNG";
		return {
			message,
		};
	}

	if (phone == false) {
		message = "SỐ ĐIỆN THOẠI PHẢI CÓ ĐỘ DÀI TỪ 10 ĐẾN 13";
		return {
			message,
		};
	}

	if (email == false) {
		message = "EMAIL PHẢI CÓ DẠNG 'ABC@EMAIL.COM'";
		return {
			message,
		};
	}

	if (pass == false) {
		message =
			"MẬT KHẨU PHẢI CÓ ĐỘ DÀI TỪ 8 ĐẾN 100, CHỮ CÁI THƯỜNG, CHỮ CÁI IN HOA, 2 KÍ TỰ ĐẶC BIỆT VÀ KHÔNG CÓ KHOẢNG TRỐNG";
		return {
			message,
		};
	}

	if (oldUsr == 0 && pass == true && email == true) {
		const salt = bcryptjs.genSaltSync(parseInt(process.env.SALT));
		const hash = bcryptjs.hashSync(user.PASS, salt);
		const result = await db.query(
			`INSERT INTO  NGUOIDUNG
			(TEN, EMAIL, PASS, SODIENTHOAI, DIACHI, GIOITINH, LOAI, TRANGTHAI)
			VALUES
			(?,?, ?, ?, ?, ?, 1, 0)`,
			[
				user.TEN,
				user.EMAIL,
				hash,
				user.SODIENTHOAI,
				user.DIACHI,
				user.GIOITINH,
			],
		);

		if (result.affectedRows) {
			message = "TẠO THÀNH CÔNG";
			return {
				message,
			};
		}
	}
}

async function updateAdm(id, user) {
	message = "CẬP NHẬT THẤT BẠI";

	const email = await checkEmailValid(user.EMAIL);

	const phone = await checkPhoneValid(user.SODIENTHOAI.toString());

	if (phone == false) {
		message = "SỐ ĐIỆN THOẠI PHẢI CÓ ĐỘ DÀI TỪ 10 ĐẾN 13";
		return {
			message,
		};
	}

	const result = await db.query(
		`UPDATE NGUOIDUNG 
			SET TEN = ?, SODIENTHOAI = ?, DIACHI = ?, GIOITINH = ?
		WHERE LOAI = 1 AND ID = ?`,
		[user.TEN, user.SODIENTHOAI, user.DIACHI, user.GIOITINH, id],
	);

	if (result.affectedRows) {
		message = "CẬP NHẬT THÀNH CÔNG";
	}

	return {
		message,
	};
}

async function updatePass(id, pass) {
	message = "SAI MẬT KHẨU";
	const passchk = await checkPassValid(pass.PASS_NEW);

	const oldUsr = await findAdmId(id);
	const passUsr = bcryptjs.compareSync(pass.PASS_OLD, oldUsr[0].PASS);

	if (passchk == false) {
		message =
			"MẬT KHẨU PHẢI CÓ ĐỘ DÀI TỪ 8 ĐẾN 100, CHỮ CÁI THƯỜNG, CHỮ CÁI IN HOA, 2 KÍ TỰ ĐẶC BIỆT VÀ KHÔNG CÓ KHOẢNG TRỐNG";
		return {
			message,
		};
	}

	if (passUsr == true) {
		const salt = bcryptjs.genSaltSync(parseInt(process.env.SALT));
		const hash = bcryptjs.hashSync(pass.PASS_NEW, salt);

		const result = await db.query(
			`UPDATE NGUOIDUNG
				SET PASS=?
			WHERE LOAI = 1 AND ID = ?`,
			[hash, id],
		);
		if (result.affectedRows) {
			message = "CẬP NHẬT THÀNH CÔNG";
		}
		return {
			message,
		};
	} else {
		return {
			message,
		};
	}
}

async function removeAdm(id) {
	const result = await db.query(
		`UPDATE NGUOIDUNG SET TRANGTHAI = 1 WHERE LOAI = 1 AND ID = ?`,
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

async function activeAdm(id) {
	const result = await db.query(
		`UPDATE NGUOIDUNG SET TRANGTHAI = 0 WHERE LOAI = 1 AND ID = ?`,
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

module.exports = {
	getAllAdm,
	getAllAdmActive,
	getAllAdmNotActive,
	findAdmId,
	findAdmMail,
	findAdmName,
	findAdmPhone,
	createAdm,
	updateAdm,
	removeAdm,
	updatePass,
	activeAdm,
};
