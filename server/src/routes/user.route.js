/** @format */

const express = require("express");
const router = express.Router();
const user = require("../controllers/user.controller");
const token = require("../middlewares/token.middleware");

router.get("/get-all-usr", token.verifyToken, user.getAllUsr);

router.get("/get-all-usr-active", token.verifyToken, user.getAllUsrActive);

router.get("/get-all-usr-not-active", token.verifyToken, user.getAllUsrNotActive);

router.post("/create-usr", user.createUsr);

router.put("/update-usr", token.verifyToken, user.updateUsr);

router.delete("/remove-usr", token.verifyToken, user.removeUsr);

router.get("/find-usr-id", token.verifyToken, user.findUsrId);

router.get("/find-usr-name", token.verifyToken, user.findUsrName);

router.get("/find-usr-mail", token.verifyToken, user.findUsrMail);

router.get("/find-usr-phone", token.verifyToken, user.findUsrPhone);

router.post("/login", token.login);

module.exports = router;
