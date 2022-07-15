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

async function getOrderByID(req, res, next) {
	try {
		res.json(await order.getOrderByID(req.params.id));
	} catch (err) {
		console.error(`Error`, err.message);
		next(err);
	}
}

async function confirmOder(req, res, next) {
	try {
		res.json(await order.confirmOder(req.params.id));
	} catch (err) {
		console.error(`Error`, err.message);
		next(err);
	}
}

async function cencelOder(req, res, next) {
	try {
		res.json(await order.cencelOder(req.params.id));
	} catch (err) {
		console.error(`Error`, err.message);
		next(err);
	}
}

async function movingOder(req, res, next) {
	try {
		res.json(await order.movingOder(req.params.id));
	} catch (err) {
		console.error(`Error`, err.message);
		next(err);
	}
}

async function completedOder(req, res, next) {
	try {
		res.json(await order.completedOder(req.params.id));
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
	getOrderByID,
	confirmOder,
	cencelOder,
	movingOder,
	completedOder,
};
