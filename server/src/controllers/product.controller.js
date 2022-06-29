/** @format */


const product = require("../services/product.service");

async function getAllPro(req, res, next) {
    try {
        res.json(await product.getAllPro());
    } catch (err) {
        console.error(`Error`, err.message);
        next(err);
    }
}

async function getAllProActive(req, res, next) {
    try {
        res.json(await product.getAllProActive());
    } catch (err) {
        console.error(`Error`, err.message);
        next(err);
    }
}

async function getAllProNotActive(req, res, next) {
    try {
        res.json(await product.getAllProNotActive());
    } catch (err) {
        console.error(`Error`, err.message);
        next(err);
    }
}

async function findProByName(req, res, next) {
    try {
        res.json(await product.findProByName(req.body.TEN));
    } catch (err) {
        console.error(`Error`, err.message);
        next(err);
    }
}

async function findProByBrand(req, res, next) {
    try {
        res.json(await product.findProByBrand(req.body.ID));
    } catch (err) {
        console.error(`Error`, err.message);
        next(err);
    }
}

async function findProByCategory(req, res, next) {
    try {
        res.json(await product.findProByCategory(req.body.ID));
    } catch (err) {
        console.error(`Error`, err.message);
        next(err);
    }
}

async function addProduct(req, res, next) {
    try {
        res.json(await product.addProduct(req.body));
    } catch (err) {
        console.error(`Error`, err.message);
        next(err);
    }
}

async function updateProduct(req, res, next) {
    try {
        res.json(await product.updateProduct(req.body.ID, req.body));
    } catch (err) {
        console.error(`Error`, err.message);
        next(err);
    }
}

async function removeProduct(req, res, next) {
    try {
        res.json(await product.removeProduct(req.body.ID));
    } catch (err) {
        console.error(`Error`, err.message);
        next(err);
    }
}

async function getAllBrand(req, res, next) {
    try {
        res.json(await product.getAllBrand());
    } catch (err) {
        console.error(`Error`, err.message);
        next(err);
    }
}

async function getAllBrandActive(req, res, next) {
    try {
        res.json(await product.getAllBrandActive());
    } catch (err) {
        console.error(`Error`, err.message);
        next(err);
    }
}

async function getAllBrandNotTActive(req, res, next) {
    try {
        res.json(await product.getAllBrandNotTActive());
    } catch (err) {
        console.error(`Error`, err.message);
        next(err);
    }
}

async function addBrand(req, res, next) {
    try {
        res.json(await product.addBrand(req.body.TEN.toUpperCase()));
    } catch (err) {
        console.error(`Error`, err.message);
        next(err);
    }
}

async function updatedBrand(req, res, next) {
    try {
        res.json(await product.updatedBrand(req.body.ID, req.body.TEN.toUpperCase()));
    } catch (err) {
        console.error(`Error`, err.message);
        next(err);
    }
}

async function removeBrand(req, res, next) {
    try {
        res.json(await product.removeBrand(req.body.ID));
    } catch (err) {
        console.error(`Error`, err.message);
        next(err);
    }
}

async function addProductDetails(req, res, next) {
    try {
        res.json(await product.addProductDetails(req.body));
    } catch (err) {
        console.error(`Error`, err.message);
        next(err);
    }
}

async function updateProductDetails(req, res, next) {
    try {
        res.json(await product.updateProductDetails(req.body.SANPHAM_ID, req.body));
    } catch (err) {
        console.error(`Error`, err.message);
        next(err);
    }
}

async function addCategory(req, res, next) {
    try {
        res.json(await product.addCategory(req.body.TEN.toUpperCase()));
    } catch (err) {
        console.error(`Error`, err.message);
        next(err);
    }
}

async function updateCategory(req, res, next) {
    try {
        res.json(await product.updateCategory(req.body.ID, req.body.TEN.toUpperCase()));
    } catch (err) {
        console.error(`Error`, err.message);
        next(err);
    }
}

async function removeCategory(req, res, next) {
    try {
        res.json(await product.removeCategory(req.body.ID));
    } catch (err) {
        console.error(`Error`, err.message);
        next(err);
    }
}

async function getAllCategory(req, res, next) {
    try {
        res.json(await product.getAllCategory());
    } catch (err) {
        console.error(`Error`, err.message);
        next(err);
    }
}

async function getAllCategoryActive(req, res, next) {
    try {
        res.json(await product.getAllCategoryActive());
    } catch (err) {
        console.error(`Error`, err.message);
        next(err);
    }
}

async function getAllCategoryNotTActive(req, res, next) {
    try {
        res.json(await product.getAllCategoryNotTActive());
    } catch (err) {
        console.error(`Error`, err.message);
        next(err);
    }
}

module.exports = {
    getAllPro,
    getAllProActive,
    getAllProNotActive,
    findProByName,
    findProByBrand,
    findProByCategory,
    addProduct,
    updateProduct,
    removeProduct,
    getAllBrand,
    getAllBrandActive,
    getAllBrandNotTActive,
    addBrand,
    updatedBrand,
    removeBrand,
    addProductDetails,
    updateProductDetails,
    addCategory,
    updateCategory,
    removeCategory,
    getAllCategory,
    getAllCategoryActive,
    getAllCategoryNotTActive
};