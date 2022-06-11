/** @format */

const user = require("../services/user.service");

async function getAllUsr(req, res, next) {
	try {
		res.json(await user.getAllUsr(req.params.page));
	} catch (err) {
		console.error(`Error while getting user`, err.message);
		next(err);
	}
}

async function findUsrId(req, res, next) {
	try {
		res.json(await user.findUsrId(req.params.id));
	} catch (err) {
		console.error(`Error while getting user`, err.message);
		next(err);
	}
}

async function findUsrName(req, res, next) {
	try {
		res.json(await user.findUsrName(req.query.name));
		// console.log(req.query.name);
	} catch (err) {
		console.error(`Error while getting user`, err.message);
		next(err);
	}
}

async function createUsr(req, res, next) {
	try {
		res.json(await user.createUsr(req.body));
	} catch (err) {
		console.error(`Error while register user`, err.message);
		next(err);
	}
}

async function updateUsr(req, res, next) {
	try {
		res.json(await user.updateUsr(req.params.id, req.body));
		// console
	} catch (err) {
		console.error(`Error while updating user`, err.message);
		next(err);
	}
}

async function removeUsr(req, res, next) {
	try {
		res.json(await user.removeUsr(req.params.id));
	} catch (err) {
		console.error(`Error while updating user`, err.message);
		next(err);
	}
}

async function login(req, res, next) {
	try {
		res.json(await user.login(req.body));
	} catch (err) {
		console.error(`Error while updating user`, err.message);
		next(err);
	}
}

module.exports = {
	getAllUsr,
	findUsrId,
	findUsrName,
	createUsr,
	updateUsr,
	removeUsr,
	login,
};
