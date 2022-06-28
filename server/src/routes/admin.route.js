/** @format */

const express = require("express");
const router = express.Router();
const admin = require("../controllers/admin.controller");
const token = require("../middlewares/token.middleware");

router.get("/get-all-adm", token.verifyToken, admin.getAllAdm);

router.get("/get-all-adm-active", token.verifyToken, admin.getAllAdmActive);

router.get("/get-all-adm-not-active", token.verifyToken, admin.getAllAdmNotActive);

router.post("/create-adm", admin.createAdm);

router.put("/update-adm", token.verifyToken, admin.updateAdm);

router.delete("/remove-adm", token.verifyToken, admin.removeAdm);

router.get("/find-adm-id", token.verifyToken, admin.findAdmId);

router.get("/find-adm-name", token.verifyToken, admin.findAdmName);

router.get("/find-adm-mail", token.verifyToken, admin.findAdmMail);

router.get("/find-adm-phone", token.verifyToken, admin.findAdmPhone);

router.post("/login", token.login);

module.exports = router;