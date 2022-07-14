/** @format */

const admin = require("../services/admin.service");

async function getAllAdm(req, res, next) {
	try {
		res.json(await admin.getAllAdm());
	} catch (err) {
		console.error(`Error`, err.message);
		next(err);
	}
}

async function getAllAdmActive(req, res, next) {
	try {
		res.json(await admin.getAllAdmActive());
	} catch (err) {
		console.error(`Error`, err.message);
		next(err);
	}
}

async function getAllAdmNotActive(req, res, next) {
	try {
		res.json(await admin.getAllAdmNotActive());
	} catch (err) {
		console.error(`Error`, err.message);
		next(err);
	}
}

async function findAdmId(req, res, next) {
	try {
		res.json(await admin.findAdmId(req.params.ID));
	} catch (err) {
		console.error(`Error`, err.message);
		next(err);
	}
}

async function findAdmMail(req, res, next) {
	try {
		res.json(await admin.findAdmMail(req.params.EMAIL));
	} catch (err) {
		console.error(`Error`, err.message);
		next(err);
	}
}

async function findAdmName(req, res, next) {
	try {
		res.json(await admin.findAdmName(req.params.NAME));
	} catch (err) {
		console.error(`Error`, err.message);
		next(err);
	}
}

async function findAdmPhone(req, res, next) {
	try {
		res.json(await admin.findAdmPhone(req.params.PHONE));
	} catch (err) {
		console.error(`Error`, err.message);
		next(err);
	}
}

async function createAdm(req, res, next) {
	try {
		res.json(await admin.createAdm(req.body));
		// console.log(req.body)
	} catch (err) {
		console.error(`Error`, err.message);
		next(err);
	}
}

async function updateAdm(req, res, next) {
	try {
		res.json(await admin.updateAdm(req.params.ID, req.body));
	} catch (err) {
		console.error(`Error`, err.message);
		next(err);
	}
}

async function updatePass(req, res, next) {
	try {
		res.json(await admin.updatePass(req.params.ID, req.body));
	} catch (err) {
		console.error(`Error`, err.message);
		next(err);
	}
}

async function removeAdm(req, res, next) {
	try {
		res.json(await admin.removeAdm(req.params.ID));
	} catch (err) {
		console.error(`Error`, err.message);
		next(err);
	}
}

async function activeAdm(req, res, next) {
	try {
		res.json(await admin.activeAdm(req.params.ID));
	} catch (err) {
		console.error(`Error`, err.message);
		next(err);
	}
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
