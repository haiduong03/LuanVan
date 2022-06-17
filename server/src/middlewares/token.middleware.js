/** @format */

// const db = require("../services/db.service");
const express = require("express");
const app = express();
require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const used = require("../services/user.service");

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
		console.log(err, data);
		if (err) res.sendStatus(403);
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
		const use = await used.findUsrMail(req.body.user_email);
		const pass = bcryptjs.compareSync(req.body.user_pass, use[0].user_pass);
		if (use && pass == true && use[0].user_status == 0) {
			const data = {
				id: use[0].user_id,
				email: use[0].user_email,
			};
			const key = jwt.sign(data, process.env.JWT_TOKEN_KEY)
			const refresh = jwt.sign(data, process.env.JWT_REFRESH_TOKEN_KEY);
			listToken.push(refresh);
			res.json({
				key,
				refresh
			});
		}
	} catch (error) {
		next(error)
	}
}

module.exports = {
	verifyToken,
	refreshToken,
	login,
};