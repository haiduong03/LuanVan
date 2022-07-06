/** @format */

const express = require("express");
const router = express.Router();
const user = require("../controllers/user.controller");
const token = require("../middlewares/token.middleware");

router.get("/get-all-usr", token.verifyToken, user.getAllUsr);

router.get("/get-all-usr-active", token.verifyToken, user.getAllUsrActive);

router.get(
	"/get-all-usr-not-active",
	token.verifyToken,
	user.getAllUsrNotActive,
);

router.post("/create-usr", user.createUsr);

router.put("/update-usr/:ID", token.verifyToken, user.updateUsr);

router.delete("/remove-usr/:ID", token.verifyToken, user.removeUsr);

router.get("/active-usr/:ID", token.verifyToken, user.activeUsr);

router.get("/find-usr-id/:ID", token.verifyToken, user.findUsrId);

router.get("/find-usr-name/:NAME", token.verifyToken, user.findUsrName);

router.get("/find-usr-mail/:EMAIL", token.verifyToken, user.findUsrMail);

router.get("/find-usr-phone/:PHONE", token.verifyToken, user.findUsrPhone);

router.post("/login", token.login);

module.exports = router;
