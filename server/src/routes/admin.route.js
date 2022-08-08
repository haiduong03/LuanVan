/** @format */

const express = require("express");
const router = express.Router();
const admin = require("../controllers/admin.controller");
const token = require("../middlewares/token.middleware");

router.get("/get-all-adm", token.verifyToken, admin.getAllAdm);

router.get("/get-all-adm-active", token.verifyToken, admin.getAllAdmActive);

router.get(
	"/get-all-adm-not-active",
	token.verifyToken,
	admin.getAllAdmNotActive,
);

router.post("/create-adm", token.verifyToken, admin.createAdm);

router.put("/update-adm/:ID", token.verifyToken, admin.updateAdm);

router.put("/update-pass-admin/:ID", token.verifyToken, admin.updatePass);

router.delete("/remove-adm/:ID", token.verifyToken, admin.removeAdm);

router.get("/active-adm/:ID", token.verifyToken, admin.activeAdm);

router.get("/find-adm-id/:ID", token.verifyToken, admin.findAdmId);

router.get("/find-adm-name/:NAME", token.verifyToken, admin.findAdmName);

router.get("/find-adm-mail/:EMAIL", token.verifyToken, admin.findAdmMail);

router.get("/find-adm-phone/:PHONE", token.verifyToken, admin.findAdmPhone);

router.post("/login", token.loginAdmin);

module.exports = router;
