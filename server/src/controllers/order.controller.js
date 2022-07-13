/** @format */

const order = require("../services/order.service");

async function createOder(req, res, next) {
	try {
		res.json(await order.createOder(req.body));
	} catch (err) {
		console.error(`Error`, err.message);
		next(err);
	}
}

module.exports = { createOder };
