/** @format */


const user = require("../services/user.service");

async function getAllUsr(req, res, next) {
	try {
		res.json(await user.getAllUsr(req.params.page));
	} catch (err) {
		console.error(`Error`, err.message);
		next(err);
	}
}

async function getAllUsrActive(req, res, next) {
	try {
		res.json(await user.getAllUsrActive(req.params.page));
	} catch (err) {
		console.error(`Error`, err.message);
		next(err);
	}
}

async function getAllUsrNotActive(req, res, next) {
	try {
		res.json(await user.getAllUsrNotActive(req.params.page));
	} catch (err) {
		console.error(`Error`, err.message);
		next(err);
	}
}


async function findUsrId(req, res, next) {
	try {
		res.json(await user.findUsrId(req.params.id));
	} catch (err) {
		console.error(`Error`, err.message);
		next(err);
	}
}

async function findUsrName(req, res, next) {
	try {
		res.json(await user.findUsrName(req.query.name));
	} catch (err) {
		console.error(`Error`, err.message);
		next(err);
	}
}

async function findUsrMail(req, res, next) {
	try {
		res.json(await user.findUsrMail(req.query.name));
	} catch (err) {
		console.error(`Error`, err.message);
		next(err);
	}
}

async function findUsrPhone(req, res, next) {
	try {
		res.json(await user.findUsrPhone(req.query.name));
	} catch (err) {
		console.error(`Error`, err.message);
		next(err);
	}
}

async function findUsrNotActive(req, res, next) {
	try {
		res.json(await user.findUsrNotActive(req.query.name));
	} catch (err) {
		console.error(`Error`, err.message);
		next(err);
	}
}

async function findUsrActive(req, res, next) {
	try {
		res.json(await user.findUsrActive(req.query.name));
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
		res.json(await user.updateUsr(req.params.id, req.body));
		// console
	} catch (err) {
		console.error(`Error`, err.message);
		next(err);
	}
}

async function removeUsr(req, res, next) {
	try {
		res.json(await user.removeUsr(req.params.id));
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
	findUsrNotActive,
	findUsrActive,
	createUsr,
	updateUsr,
	removeUsr,
};