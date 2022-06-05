/** @format */

const express = require("express");
const router = express.Router();
const user = require("../controllers/user.controller");

router.get("/getAll", user.getAll);

router.post("/register", user.register);

router.get("/chkpass", user.checkPassUsr);

router.get("/chkmail", user.checkEmailUsr);

router.get("/checkEmailValid", user.checkEmailValid);

router.get("/checkPassValid", user.checkPassValid);

router.put("/update", user.updateUsr);

router.delete("/remove", user.removeUsr);

module.exports = router;
