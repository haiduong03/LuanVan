/** @format */

// const db = require("../services/db.service");
const express = require("express");
const app = express();
require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const usr = require("../services/user.service");
const adm = require("../services/admin.service");

let message = null;

let listToken = [];

const defaultAcount = {
	EMAIL: "admin",
	PASS: "admin",
};

function verifyToken(req, res, next) {
	const header = req.headers.authorization;
	if (!header) {
		message = "KHÔNG CHẤP NHẬN";
		return res.json({
			message,
		});
	}
	const token = header.split(" ")[1];
	jwt.verify(token, process.env.JWT_TOKEN_KEY, (err, data) => {
		if (err) {
			message = err;
			return res.json({
				message,
			});
		}
		next();
	});
}

function refreshToken(refreshToken) {
	if (!refreshToken) {
		message = "Not accepted";
		return {
			message,
		};
	}
	if (!listToken.includes(refreshToken)) {
		message = "Not accepted";
		return {
			message,
		};
	}

	jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, data) => {
		if (err) res.json(err);
		const user = {
			id: data.id,
			email: data.email,
		};
		const accessToken = jwt.sign(user, process.env.JWT_TOKEN_KEY);
		return {
			accessToken,
		};
	});
}

async function loginUser(req, res, next) {
	try {
		const user = await usr.findUsrMail(req.body.EMAIL);
		if (user.length != 0) {
			const passUsr = bcryptjs.compareSync(req.body.PASS, user[0].PASS);
			if (passUsr == true && user[0].TRANGTHAI == 0 && user[0].LOAI == 0) {
				const data = {
					id: user[0].ID,
					email: user[0].EMAIL,
				};
				const key = jwt.sign(data, process.env.JWT_TOKEN_KEY);
				const refresh = jwt.sign(data, process.env.JWT_REFRESH_TOKEN_KEY);
				listToken.push(refresh);
				return res.json({
					key,
					refresh,
				});
			}
		}
		return res.json("SAI MẬT KHẨU");
	} catch (err) {
		next(err);
	}
}

async function loginAdmin(req, res, next) {
	try {
		if (
			req.body.EMAIL === defaultAcount.EMAIL &&
			req.body.PASS === defaultAcount.PASS
		) {
			const key = jwt.sign(req.body.EMAIL, process.env.JWT_TOKEN_KEY);
			const refresh = jwt.sign(
				req.body.EMAIL,
				process.env.JWT_REFRESH_TOKEN_KEY,
			);
			listToken.push(refresh);
			return res.json({
				key,
				refresh,
			});
		} else {
			const admin = await adm.findAdmMail(req.body.EMAIL);
			if (admin.length != 0) {
				const passAdm = bcryptjs.compareSync(req.body.PASS, admin[0].PASS);
				if (passAdm == true && admin[0].TRANGTHAI == 0 && admin[0].LOAI == 1) {
					const data = {
						id: admin[0].ID,
						email: admin[0].EMAIL,
					};
					const key = jwt.sign(data, process.env.JWT_TOKEN_KEY);
					const refresh = jwt.sign(data, process.env.JWT_REFRESH_TOKEN_KEY);
					listToken.push(refresh);
					return res.json({
						key,
						refresh,
					});
				}
			}
		}

		return res.json("SAI MẬT KHẨU");
	} catch (err) {
		next(err);
	}
}

module.exports = {
	verifyToken,
	refreshToken,
	loginUser,
	loginAdmin,
};
