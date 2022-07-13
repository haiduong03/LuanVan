/** @format */

const express = require("express");
const router = express.Router();
const order = require("../controllers/order.controller");
const token = require("../middlewares/token.middleware");

router.post("/add-order", token.verifyToken, order.createOder);

module.exports = router;
