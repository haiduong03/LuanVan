/** @format */

const express = require("express");
const router = express.Router();
const product = require("../controllers/product.controller");
const token = require("../middlewares/token.middleware");

router.get("/get-all-pro", token.verifyToken, product.getAllPro);

router.get("/get-all-pro-active", product.getAllProActive);

router.get(
	"/get-all-pro-not-active",
	token.verifyToken,
	product.getAllProNotActive,
);

router.get("/find-pro-by-name", product.findProByName);

router.get("/find-pro-by-brand", product.findProByBrand);

router.get("/find-pro-by-category", product.findProByCategory);

router.post("/create-product", token.verifyToken, product.addProduct);

router.put("/update-product", token.verifyToken, product.updateProduct);

router.delete("/remove-product", token.verifyToken, product.removeProduct);

router.get("/get-all-brand", token.verifyToken, product.getAllBrand);

router.get("/get-all-brand-active", product.getAllBrandActive);

router.get(
	"/get-all-brand-not-active",
	token.verifyToken,
	product.getAllBrandNotTActive,
);

router.post("/add-brand", token.verifyToken, product.addBrand);

router.put("/update-brand", token.verifyToken, product.updatedBrand);

router.delete("/remove-brand", token.verifyToken, product.removeBrand);

router.post(
	"/add-product-details",
	token.verifyToken,
	product.addProductDetails,
);

router.put(
	"/update-product-details",
	token.verifyToken,
	product.updateProductDetails,
);

router.post("/add-category", token.verifyToken, product.addCategory);

router.put("/update-category", token.verifyToken, product.updateCategory);

router.delete("/remove-category", token.verifyToken, product.removeCategory);

router.get("/get-all-category", token.verifyToken, product.getAllCategory);

router.get(
	"/get-all-category-active",
	token.verifyToken,
	product.getAllCategoryActive,
);

router.get(
	"/get-all-category-not-active",
	token.verifyToken,
	product.getAllCategoryNotTActive,
);

module.exports = router;
