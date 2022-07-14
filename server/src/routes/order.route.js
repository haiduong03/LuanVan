/** @format */

const express = require("express");
const router = express.Router();
const order = require("../controllers/order.controller");
const token = require("../middlewares/token.middleware");

router.post("/add-order", token.verifyToken, order.createOrder);

router.get("/get-all-order", token.verifyToken, order.getAllOrder);

router.get("/get-order-detail/:id", token.verifyToken, order.getOrderDetail);

router.get("/get-order-user/:id", token.verifyToken, order.getOrderUser);

module.exports = router;
