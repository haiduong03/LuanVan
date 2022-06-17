/** @format */

const express = require("express");
const router = express.Router();
const admin = require("../controllers/admin.controller");
const token = require("../middlewares/token.middleware");

router.get("/getAllAdm/:page", token.verifyToken, admin.getAllAdm);

router.get("/getAllAdmActive/:page", token.verifyToken, admin.getAllAdmActive);

router.get("/getAllAdmNotActive/:page", token.verifyToken, admin.getAllAdmNotActive);

router.post("/createAdm", admin.createAdm);

router.put("/updateAdm/:id", token.verifyToken, admin.updateAdm);

router.delete("/removeAdm/:id", token.verifyToken, admin.removeAdm);

router.post("/findAdmId/:id", token.verifyToken, admin.findAdmId);

router.post("/findAdmName", token.verifyToken, admin.findAdmName);

router.post("/findAdmMail", token.verifyToken, admin.findAdmMail);

router.post("/findAdmPhone", token.verifyToken, admin.findAdmPhone);

router.post("/findAdmNotActive", token.verifyToken, admin.findAdmNotActive);

router.post("/findAdmActive", token.verifyToken, admin.findAdmActive);

router.post("/login", token.login);

module.exports = router;