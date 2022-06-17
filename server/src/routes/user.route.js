/** @format */

const express = require("express");
const router = express.Router();
const user = require("../controllers/user.controller");
const token = require("../middlewares/token.middleware");

router.get("/getAllUsr/:page", token.verifyToken, user.getAllUsr);

router.get("/getAllUsrActive/:page", token.verifyToken, user.getAllUsrActive);

router.get("/getAllUsrNotActive/:page", token.verifyToken, user.getAllUsrNotActive);

router.post("/createUsr", user.createUsr);

router.put("/update/:id", token.verifyToken, user.updateUsr);

router.delete("/remove/:id", token.verifyToken, user.removeUsr);

router.post("/findUsrId/:id", token.verifyToken, user.findUsrId);

router.post("/findUsrName", token.verifyToken, user.findUsrName);

router.post("/findUsrMail", token.verifyToken, user.findUsrMail);

router.post("/findUsrPhone", token.verifyToken, user.findUsrPhone);

router.post("/findUsrNotActive", token.verifyToken, user.findUsrNotActive);

router.post("/findUsrActive", token.verifyToken, user.findUsrActive);

router.post("/login", token.login);

module.exports = router;