/** @format */

const express = require("express");
const router = express.Router();
const admin = require("../controllers/admin.controller");
const token = require("../middlewares/token.middleware");

router.get("/get-all-adm/:page", token.verifyToken, admin.getAllAdm);

router.get("/get-all-adm-active/:page", token.verifyToken, admin.getAllAdmActive);

router.get("/get-all-adm-not-active/:page", token.verifyToken, admin.getAllAdmNotActive);

router.post("/create-adm", admin.createAdm);

router.put("/update-adm/:id", token.verifyToken, admin.updateAdm);

router.delete("/remove-adm/:id", token.verifyToken, admin.removeAdm);

router.get("/find-adm-id/:id", token.verifyToken, admin.findAdmId);

router.get("/find-adm-name", token.verifyToken, admin.findAdmName);

router.get("/find-adm-mail", token.verifyToken, admin.findAdmMail);

router.get("/find-adm-phone", token.verifyToken, admin.findAdmPhone);

router.get("/find-adm-not-active", token.verifyToken, admin.findAdmNotActive);

router.get("/find-adm-active", token.verifyToken, admin.findAdmActive);

router.post("/login", token.login);

module.exports = router;