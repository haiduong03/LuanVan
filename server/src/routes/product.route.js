/** @format */

const express = require("express");
const router = express.Router();
const product = require("../controllers/product.controller");
const token = require("../middlewares/token.middleware");

router.get("/get-all-product", token.verifyToken, product.getAllPro);

router.get("/get-all-product-active", product.getAllProActive);

router.get("/find-product-by-id/:id", token.verifyToken, product.findProById);

router.get("/find-product-by-name", product.findProByName);

router.get("/find-product-by-brand", product.findProByBrand);

router.get("/find-product-by-cpu", product.findProByCpu);

router.get("/find-product-by-ram", product.findProByRam);

router.get("/find-product-by-os", product.findProByOS);

router.get("/find-product-by-drive", product.findProByDrive);

router.get("/get-all-brand", product.getAllBrand);

router.post("/add-brand/:name", token.verifyToken, product.addBrand);

router.get("/get-all-cpu", product.getAllCpu);

router.post("/add-cpu/:name", token.verifyToken, product.addCpu);

router.get("/get-all-ram", product.getAllRam);

router.post("/add-ram/:name", token.verifyToken, product.addRam);

router.get("/get-all-drive", product.getAllDrive);

router.post("/add-drive/:name", token.verifyToken, product.addDrive);

router.get("/get-all-os", product.getAllOS);

router.post("/add-os/:name", token.verifyToken, product.addOS);

router.post("/add-product", token.verifyToken, product.addProduct);

router.put("/update-product/:id", token.verifyToken, product.updateProduct);

router.delete("/remove-product/:id", token.verifyToken, product.removeProduct);

router.get("/active-product/:id", token.verifyToken, product.activeProduct);

module.exports = router;
