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

async function getAllUsr() {
	// const offset = helper.getOffset(page, config.listPerPage);
	// const rows = await db.query(`SELECT * FROM user WHERE user_type = 0 LIMIT ?,?`, [
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
	return await db.query(`SELECT * FROM NGUOIDUNG WHERE LOAI = 0`);
}

async function getAllUsrActive() {
	// const offset = helper.getOffset(page, config.listPerPage);
	// const rows = await db.query(`SELECT * FROM user WHERE user_type = 0 AND user_status=0 LIMIT ?,?`, [
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
		`SELECT * FROM NGUOIDUNG WHERE LOAI = 0 AND TRANGTHAI = 0`,
	);
}

async function getAllUsrNotActive() {
	// const offset = helper.getOffset(page, config.listPerPage);
	// const rows = await db.query(`SELECT * FROM user WHERE user_type = 0 AND user_status = 1 LIMIT ?,?`, [
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
		`SELECT * FROM NGUOIDUNG WHERE LOAI = 0 AND TRANGTHAI = 1`,
	);
}

async function findUsrId(id) {
	return await db.query(`SELECT * FROM NGUOIDUNG WHERE LOAI = 0 AND ID = ?`, [
		id,
	]);
}

async function findUsrMail(email) {
	if ((await checkEmailValid(email)) == false) {
		message = "EMAIL PHẢI CÓ DẠNG ABC@EMAIL.COM";
		return message;
	}
	return await db.query(
		`SELECT * FROM NGUOIDUNG WHERE LOAI = 0 AND EMAIL = ?`,
		[email],
	);
}

async function findUsrName(name) {
	const value = name.replace(/ /g, "%");
	return await db.query(
		`SELECT * FROM NGUOIDUNG WHERE LOAI = 0 AND TEN LIKE N'%${value}%'`,
	);
}

async function findUsrPhone(phone) {
	return await db.query(
		`SELECT * FROM NGUOIDUNG WHERE LOAI = 0 AND  SODIENTHOAI = ?`,
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
		.max(13); // Maximum length 1

	return constructor.validate(phone); // true or false
}

async function createUsr(user) {
	const oldUsr = await findUsrMail(user.EMAIL);
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
			user,
		};
	}

	if (oldUsr.length != 0 && oldUsr[0].TRANGTHAI == 0) {
		message = "ĐÃ CÓ NGƯỜI DÙNG";
		return {
			message,
			user,
		};
	}

	if (phone == false) {
		message = "SỐ ĐIỆN THOẠI PHẢI CÓ ĐỘ DÀI TỪ 10 ĐẾN 13";
		return {
			message,
			user,
		};
	}

	if (email == false) {
		message = "EMAIL PHẢI CÓ DẠNG 'ABC@EMAIL.COM'";
		return {
			message,
			user,
		};
	}

	if (pass == false) {
		message =
			"MẬT KHẨU PHẢI CÓ ĐỘ DÀI TỪ 8 ĐẾN 100, CHỮ CÁI THƯỜNG, CHỮ CÁI IN HOA, 2 KÍ TỰ ĐẶC BIỆT VÀ KHÔNG CÓ KHOẢNG TRỐNG";
		return {
			message,
			user,
		};
	}

	if (oldUsr == 0 && pass == true && email == true) {
		const salt = bcryptjs.genSaltSync(parseInt(process.env.SALT));
		const hash = bcryptjs.hashSync(user.PASS, salt);

		const result = await db.query(
			`INSERT INTO  NGUOIDUNG
				(TEN ,EMAIL, PASS, SODIENTHOAI, DIACHI, GIOITINH, LOAI, TRANGTHAI)
				VALUES
				( ?, ?, ?, ?, ?, ?, 0, 0)`,
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
		}
	}

	return {
		message,
	};
}

async function updateUsr(id, user) {
	message = "CẬP NHẬT THẤT BẠI";

	const result = await db.query(
		`UPDATE NGUOIDUNG 
			SET TEN = ?, SODIENTHOAI = ?, DIACHI = ?, GIOITINH = ?
		WHERE LOAI = 0 AND ID = ?`,
		[user.TEN, user.SODIENTHOAI, user.DIACHI, user.GIOITINH, id],
	);

	if (result.affectedRows) {
		message = "CẬP NHẬT THÀNH CÔNG";
	}

	return {
		message,
	};
}

// async function changePassUsr(email, oldPass, newPass) {
// 	const use = await findUsrMail(email);

// }

async function removeUsr(id) {
	const result = await db.query(
		`UPDATE NGUOIDUNG SET TRANGTHAI = 1 WHERE LOAI = 0 AND ID = ?`,
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

async function activeUsr(id) {
	const result = await db.query(
		`UPDATE NGUOIDUNG SET TRANGTHAI = 0 WHERE LOAI = 0 AND ID = ?`,
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
	getAllUsr,
	getAllUsrActive,
	getAllUsrNotActive,
	findUsrId,
	findUsrMail,
	findUsrName,
	findUsrPhone,
	createUsr,
	updateUsr,
	removeUsr,
	activeUsr,
};
