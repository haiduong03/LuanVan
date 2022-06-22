const express = require("express");
const router = express.Router();
const product = require("../controllers/product.controller");
const token = require("../middlewares/token.middleware");


router.get("/get-all-list-pro/:page", token.verifyToken, product.getAllListPro);

router.get("/get-all-list-pro-active/:page", product.getAllListProActive);

router.get("/get-all-list-pro-not-active/:page", token.verifyToken, product.getAllListProNotActive);

router.post("/find-list-id/:id", product.findListId);

router.post("/find-list-name", product.findListName);

router.post("/add-list-product", token.verifyToken, product.addListProduct);

router.put("/update-list-product", token.verifyToken, product.updateListProduct);

router.delete("/remove-list-product/:id", token.verifyToken, product.removeListProduct);

router.get("/get-all-prod/:page", token.verifyToken, product.getAllProd);

router.get("/get-all-prod-active/:page", product.getAllProdActive);

router.get("/get-all-prod-not-active/:page", token.verifyToken, product.getAllProdNotActive);

router.post("/find-pro-id/:id", product.findProId);

router.post("/find-pro-name", product.findProName);

router.post("/create-product", token.verifyToken, product.createProduct);

router.put("/updated-product", token.verifyToken, product.updatedProduct);

router.delete("/remove-product/:id", token.verifyToken, product.removeProduct);

module.exports = router;