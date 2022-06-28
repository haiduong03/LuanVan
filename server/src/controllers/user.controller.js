/** @format */


const user = require("../services/user.service");

async function getAllUsr(req, res, next) {
	try {
		res.json(await user.getAllUsr());
	} catch (err) {
		console.error(`Error`, err.message);
		next(err);
	}
}

async function getAllUsrActive(req, res, next) {
	try {
		res.json(await user.getAllUsrActive());
	} catch (err) {
		console.error(`Error`, err.message);
		next(err);
	}
}

async function getAllUsrNotActive(req, res, next) {
	try {
		res.json(await user.getAllUsrNotActive());
	} catch (err) {
		console.error(`Error`, err.message);
		next(err);
	}
}


async function findUsrId(req, res, next) {
	try {
		res.json(await user.findUsrId(req.body.ID));
	} catch (err) {
		console.error(`Error`, err.message);
		next(err);
	}
}

async function findUsrName(req, res, next) {
	try {
		res.json(await user.findUsrName(req.body.TEN));
	} catch (err) {
		console.error(`Error`, err.message);
		next(err);
	}
}

async function findUsrMail(req, res, next) {
	try {
		res.json(await user.findUsrMail(req.body.EMAIL));
	} catch (err) {
		console.error(`Error`, err.message);
		next(err);
	}
}

async function findUsrPhone(req, res, next) {
	try {
		res.json(await user.findUsrPhone(req.body.SODIENTHOAI));
	} catch (err) {
		console.error(`Error`, err.message);
		next(err);
	}
}

async function createUsr(req, res, next) {
	try {
		res.json(await user.createUsr(req.body));
	} catch (err) {
		console.error(`Error`, err.message);
		next(err);
	}
}

async function updateUsr(req, res, next) {
	try {
		res.json(await user.updateUsr(req.body.ID, req.body));
	} catch (err) {
		console.error(`Error`, err.message);
		next(err);
	}
}

async function removeUsr(req, res, next) {
	try {
		res.json(await user.removeUsr(req.body.ID));
	} catch (err) {
		console.error(`Error`, err.message);
		next(err);
	}
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
};