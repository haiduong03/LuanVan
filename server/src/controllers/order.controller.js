/** @format */

const order = require("../services/order.service");

async function createOrder(req, res, next) {
	try {
		res.json(await order.createOrder(req.body));
	} catch (err) {
		console.error(`Error`, err.message);
		next(err);
	}
}

async function getAllOrder(req, res, next) {
	try {
		res.json(await order.getAllOrder());
	} catch (err) {
		console.error(`Error`, err.message);
		next(err);
	}
}

async function getOrderDetail(req, res, next) {
	try {
		res.json(await order.getOrderDetail(req.params.id));
	} catch (err) {
		console.error(`Error`, err.message);
		next(err);
	}
}

async function getOrderUser(req, res, next) {
	try {
		res.json(await order.getOrderUser(req.params.id));
	} catch (err) {
		console.error(`Error`, err.message);
		next(err);
	}
}

module.exports = {
	createOrder,
	getAllOrder,
	getOrderDetail,
	getOrderUser,
};
