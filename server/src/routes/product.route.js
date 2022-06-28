const express = require("express");
const router = express.Router();
const product = require("../controllers/product.controller");
const token = require("../middlewares/token.middleware");


router.get("/get-all-pro", token.verifyToken, product.getAllPro);

<<<<<<< HEAD
router.get("/get-all-pro-active", product.getAllProActive);
=======
router.get("/get-all-list-pro-active/:page", product.getAllListProActive);
>>>>>>> 35ddd6a7889448f5097a843969c6da19e2ace370

router.get("/get-all-pro-not-active", token.verifyToken, product.getAllProNotActive);

<<<<<<< HEAD
router.get("/find-pro", product.findPro);

router.get("/find-pro-by-brand", product.findProByBrand);
=======
router.post("/find-list-id/:id", product.findListId);

router.post("/find-list-name", product.findListName);
>>>>>>> 35ddd6a7889448f5097a843969c6da19e2ace370

router.get("/find-pro-by-category", product.findProByCategory);

router.post("/add-product", token.verifyToken, product.addProduct);

router.put("/update-product", token.verifyToken, product.updateProduct);

router.delete("/remove-product", token.verifyToken, product.removeProduct);

<<<<<<< HEAD
router.get("/get-all-brand", token.verifyToken, product.getAllBrand);
=======
router.get("/get-all-prod-active/:page", product.getAllProdActive);
>>>>>>> 35ddd6a7889448f5097a843969c6da19e2ace370

router.get("/get-all-brand-active", product.getAllBrandActive);

<<<<<<< HEAD
router.get("/get-all-brand-not-active", token.verifyToken, product.getAllBrandNotTActive);

router.post("/add-brand", token.verifyToken, product.addBrand);
=======
router.post("/find-pro-id/:id", product.findProId);

router.post("/find-pro-name", product.findProName);
>>>>>>> 35ddd6a7889448f5097a843969c6da19e2ace370

router.put("/update-brand", token.verifyToken, product.updatedBrand);

router.delete("/remove-brand", token.verifyToken, product.removeBrand);

router.post("/add-product-details", token.verifyToken, product.addProductDetails);

router.put("/update-product-details", token.verifyToken, product.updateProductDetails);

router.get("/add-category", token.verifyToken, product.addCategory);

router.post("/update-category", token.verifyToken, product.updateCategory);

router.put("/remove-category", token.verifyToken, product.removeCategory);

router.get("/get-all-category", token.verifyToken, product.getAllCategory);

router.get("/get-all-category-active", token.verifyToken, product.getAllCategoryActive);

router.get("/get-all-category-not-active", token.verifyToken, product.getAllCategoryNotTActive);

module.exports = router;