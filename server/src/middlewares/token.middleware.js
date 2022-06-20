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
	const token = header.split(" ")[1];
	if (!token) {
		message = "Not accepted";
		res.json({
			message
		});
	}
	jwt.verify(token, process.env.JWT_TOKEN_KEY, (err, data) => {
		console.log(err, data);
		if (err)
			res.json(err);
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
		const user = await usr.findUsrMail(req.body.user_email);

		const admin = await adm.findAdmMail(req.body.user_email);

		if (user.length) {
			const passUsr = bcryptjs.compareSync(req.body.user_pass, user[0].user_pass);
			if (passUsr == true && user[0].user_status == 0) {
				const data = {
					id: user[0].user_id,
					email: user[0].user_email,
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
			const passAdm = bcryptjs.compareSync(req.body.user_pass, admin[0].user_pass);
			if (passAdm == true && admin[0].user_status == 0) {
				const data = {
					id: admin[0].user_id,
					email: admin[0].user_email,
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
		res.json("Incorrect password");

	} catch (error) {
		next(error)
	}
}

module.exports = {
	verifyToken,
	refreshToken,
	login,
};