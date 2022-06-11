/** @format */

const express = require("express");
const router = express.Router();
const user = require("../controllers/user.controller");

router.get("/getAllUsr/:page", user.getAllUsr);

router.post("/createUsr", user.createUsr);

router.get("/login", user.login);

router.put("/update/:id", user.updateUsr);

router.delete("/remove/:id", user.removeUsr);

router.get("/findUsrId/:id", user.findUsrId);

router.get("/findUsrName", user.findUsrName);

module.exports = router;
