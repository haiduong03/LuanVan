/** @format */

const express = require("express");
const router = express.Router();
const user = require("../controllers/user.controller");
const token = require("../middlewares/token.middleware");

router.get("/get-all-usr/:page", token.verifyToken, user.getAllUsr);

router.get("/get-all-usr-active/:page", token.verifyToken, user.getAllUsrActive);

router.get("/get-all-usr-not-active/:page", token.verifyToken, user.getAllUsrNotActive);

router.post("/create-usr", user.createUsr);

router.put("/update-usr/:id", token.verifyToken, user.updateUsr);

router.delete("/remove-usr/:id", token.verifyToken, user.removeUsr);

router.post("/find-usr-id/:id", token.verifyToken, user.findUsrId);

router.post("/find-usr-name", token.verifyToken, user.findUsrName);

router.post("/find-usr-mail", token.verifyToken, user.findUsrMail);

router.post("/find-usr-phone", token.verifyToken, user.findUsrPhone);

router.post("/find-usr-not-active", token.verifyToken, user.findUsrNotActive);

router.post("/find-usr-active", token.verifyToken, user.findUsrActive);

router.post("/login", token.login);

module.exports = router;