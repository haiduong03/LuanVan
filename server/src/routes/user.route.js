/** @format */

const express = require("express");
const router = express.Router();
const user = require("../controllers/user.controller");
const token = require("../middlewares/token.middleware");

router.get("/get-all-usr/:page", token.verifyToken, user.getAllUsr);

router.get("/get-all-usr-active/:page", token.verifyToken, user.getAllUsrActive);

router.get("/get-all-usr-not-active/:page", token.verifyToken, user.getAllUsrNotActive);

router.post("/create-usr", user.createUsr);

router.patch("/update-usr/:id", token.verifyToken, user.updateUsr);

router.delete("/remove-usr/:id", token.verifyToken, user.removeUsr);

router.get("/find-usr-id/:id", token.verifyToken, user.findUsrId);

router.get("/find-usr-name", token.verifyToken, user.findUsrName);

router.get("/find-usr-mail", token.verifyToken, user.findUsrMail);

router.get("/find-usr-phone", token.verifyToken, user.findUsrPhone);

router.get("/find-usr-not-active", token.verifyToken, user.findUsrNotActive);

router.get("/find-usr-active", token.verifyToken, user.findUsrActive);

router.post("/login", token.login);

module.exports = router;