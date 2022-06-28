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

function verifyToken(req, res, next) {

	const header = req.headers.authorization;

	if (!header) {
		message = "kHÔNG CHẤP NHẬN";
		return res.json({
			message
		});
	}

	const token = header.split(" ")[1];
	jwt.verify(token, process.env.JWT_TOKEN_KEY, (err, data) => {
		if (err)
			return res.json(err);
		next()
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
			email: data.email
		};
		const accessToken = jwt.sign(user, process.env.JWT_TOKEN_KEY);
		return {
			accessToken,
		};
	});
}

async function login(req, res, next) {
	try {
		const user = await usr.findUsrMail(req.body.EMAIL);

		const admin = await adm.findAdmMail(req.body.EMAIL);

		if (user.length) {
			const passUsr = bcryptjs.compareSync(req.body.PASS, user[0].PASS);
			if (passUsr == true && user[0].TRANGTHAI == 0) {
				const data = {
					id: user[0].ID,
					email: user[0].EMAIL,
				};
				const key = jwt.sign(data, process.env.JWT_TOKEN_KEY)
				const refresh = jwt.sign(data, process.env.JWT_REFRESH_TOKEN_KEY);
				listToken.push(refresh);
				res.json({
					key,
					refresh
				});
			}
		}

		if (admin.length) {
			const passAdm = bcryptjs.compareSync(req.body.PASS, admin[0].PASS);
			if (passAdm == true && admin[0].TRANGTHAI == 0) {
				const data = {
					id: admin[0].ID,
					email: admin[0].EMAIL,
				};
				const key = jwt.sign(data, process.env.JWT_TOKEN_KEY)
				const refresh = jwt.sign(data, process.env.JWT_REFRESH_TOKEN_KEY);
				listToken.push(refresh);
				res.json({
					key,
					refresh
				});
			}
		}

		res.json("SAI MẬT KHẨU");

	} catch (error) {
		next(error)
	}
}

module.exports = {
	verifyToken,
	refreshToken,
	login,
};