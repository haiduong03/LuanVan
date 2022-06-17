const express = require("express");
const router = express.Router();
const product = require("../controllers/product.controller");
const token = require("../middlewares/token.middleware");


router.get("/getAllListPro/:page", token.verifyToken, product.getAllListPro);

router.get("/getAllListProActive/:page", token.verifyToken, product.getAllListProActive);

router.get("/getAllListProNotActive/:page", token.verifyToken, product.getAllListProNotActive);

router.get("/findListId/:id", token.verifyToken, product.findListId);

router.get("/findListName", token.verifyToken, product.findListName);

router.get("/addListProduct", token.verifyToken, product.addListProduct);

router.get("/updateListProduct", token.verifyToken, product.updateListProduct);

router.get("/removeListProduct/:id", token.verifyToken, product.removeListProduct);

router.get("/getAllProd/:page", token.verifyToken, product.getAllProd);

router.get("/getAllProdActive/:page", token.verifyToken, product.getAllProdActive);

router.get("/getAllProdNotActive/:page", token.verifyToken, product.getAllProdNotActive);

router.get("/findProId/:id", token.verifyToken, product.findProId);

router.get("/findProName", token.verifyToken, product.findProName);

router.get("/createProduct", token.verifyToken, product.createProduct);

router.get("/updatedProduct", token.verifyToken, product.updatedProduct);

router.get("/removeProduct/:id", token.verifyToken, product.removeProduct);

module.exports = router;