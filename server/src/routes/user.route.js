/** @format */

const express = require("express");
const router = express.Router();
const user = require("../controllers/user.controller");

router.get("/getAllUsr", user.getAllUsr);

router.post("/register", user.register);

router.put("/update", user.updateUsr);

router.delete("/remove", user.removeUsr);

router.get("/findUsrId", user.findUsrId);

// router.get("/chkpass", user.checkPassUsr);

// router.get("/chkmail", user.checkEmailUsr);

// router.get("/checkEmailValid", user.checkEmailValid);

// router.get("/checkPassValid", user.checkPassValid);

module.exports = router;
