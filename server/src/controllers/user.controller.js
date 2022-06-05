/** @format */

const user = require("../services/user.service");

async function getAll(req, res, next) {
	try {
		res.json(await user.getAllUser(req.query.page));
	} catch (err) {
		console.error(`Error while getting user`, err.message);
		next(err);
	}
}

async function register(req, res, next) {
	try {
		res.json(await user.register(req.body));
	} catch (err) {
		console.error(`Error while register user`, err.message);
		next(err);
	}
}

async function checkPassUsr(req, res, next) {
	try {
		res.json(await user.checkPassUsr(req.body));
	} catch (err) {
		console.error(`Error: `, err.message);
		next(err);
	}
}

async function checkEmailUsr(req, res, next) {
	try {
		res.json(await user.checkEmailUsr(req.body));
	} catch (err) {
		console.error(`Error: `, err.message);
		next(err);
	}
}

async function checkEmailValid(req, res, next) {
	try {
		res.json(await user.checkEmailValid(req.body.user_email));
		// console.log(req.body.user_email);
	} catch (err) {
		console.error(`Error: `, err.message);
		next(err);
	}
}

async function checkPassValid(req, res, next) {
	try {
		res.json(await user.checkPassValid(req.body.user_pass));
	} catch (err) {
		console.error(`Error: `, err.message);
		next(err);
	}
}

async function updateUsr(req, res, next) {
	try {
		res.json(await user.updateUsr(req.body));
	} catch (err) {
		console.error(`Error while updating user`, err.message);
		next(err);
	}
}

async function removeUsr(req, res, next) {
	try {
		res.json(await user.updateUsr(req.params.user_id));
	} catch (err) {
		console.error(`Error while updating user`, err.message);
		next(err);
	}
}

module.exports = {
	getAll,
	register,
	checkPassUsr,
	checkPassValid,
	checkEmailUsr,
	checkEmailValid,
	updateUsr,
	removeUsr,
};
