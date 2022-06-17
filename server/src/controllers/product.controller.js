/** @format */


const product = require("../services/product.service");

async function getAllListPro(req, res, next) {
    try {
        res.json(await product.getAllListPro(req.params.page));
    } catch (err) {
        console.error(`Error`, err.message);
        next(err);
    }
}

async function getAllListProActive(req, res, next) {
    try {
        res.json(await performance.getAllListProActive(req.params.page));
    } catch (err) {
        console.error(`Error`, err.message);
        next(err);
    }
}

async function getAllListProNotActive(req, res, next) {
    try {
        res.json(await product.getAllListProNotActive(req.params.page));
    } catch (err) {
        console.error(`Error`, err.message);
        next(err);
    }
}

async function findListId(req, res, next) {
    try {
        res.json(await product.findListId(req.params.id));
    } catch (err) {
        console.error(`Error`, err.message);
        next(err);
    }
}

async function findListName(req, res, next) {
    try {
        res.json(await product.findListName(req.query.name));
    } catch (err) {
        console.error(`Error`, err.message);
        next(err);
    }
}

async function addListProduct(req, res, next) {
    try {
        res.json(await user.addListProduct(req.body));
    } catch (err) {
        console.error(`Error`, err.message);
        next(err);
    }
}

async function updateListProduct(req, res, next) {
    try {
        res.json(await user.findUsrPhone(req.body));
    } catch (err) {
        console.error(`Error`, err.message);
        next(err);
    }
}

async function removeListProduct(req, res, next) {
    try {
        res.json(await product.removeListProduct(req.params.id));
    } catch (err) {
        console.error(`Error`, err.message);
        next(err);
    }
}

async function getAllProd(req, res, next) {
    try {
        res.json(await product.getAllProd(req.params.page));
    } catch (err) {
        console.error(`Error`, err.message);
        next(err);
    }
}

async function getAllProdActive(req, res, next) {
    try {
        res.json(await product.getAllProdActive(req.params.page));
    } catch (err) {
        console.error(`Error`, err.message);
        next(err);
    }
}

async function getAllProdNotActive(req, res, next) {
    try {
        res.json(await product.getAllProdNotActive(req.params.page, req.body));
    } catch (err) {
        console.error(`Error`, err.message);
        next(err);
    }
}

async function findProId(req, res, next) {
    try {
        res.json(await product.findProId(req.params.id));
    } catch (err) {
        console.error(`Error`, err.message);
        next(err);
    }
}

async function findProName(req, res, next) {
    try {
        res.json(await product.findProName(req.query.name));
    } catch (err) {
        console.error(`Error`, err.message);
        next(err);
    }
}

async function createProduct(req, res, next) {
    try {
        res.json(await product.createProduct(req.body));
    } catch (err) {
        console.error(`Error`, err.message);
        next(err);
    }
}

async function updatedProduct(req, res, next) {
    try {
        res.json(await product.updatedProduct(req.body));
    } catch (err) {
        console.error(`Error`, err.message);
        next(err);
    }
}

async function removeProduct(req, res, next) {
    try {
        res.json(await product.removeProduct(req.params.id));
    } catch (err) {
        console.error(`Error`, err.message);
        next(err);
    }
}

module.exports = {
    getAllListPro,
    getAllListProActive,
    getAllListProNotActive,
    findListId,
    findListName,
    addListProduct,
    updateListProduct,
    removeListProduct,
    getAllProd,
    getAllProdActive,
    getAllProdNotActive,
    findProId,
    findProName,
    createProduct,
    updatedProduct,
    removeProduct
};