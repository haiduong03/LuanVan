/** @format */


const admin = require("../services/admin.service");

async function getAllAdm(req, res, next) {
    try {
        res.json(await admin.getAllAdm(req.params.page));
    } catch (err) {
        console.error(`Error`, err.message);
        next(err);
    }
}

async function getAllAdmActive(req, res, next) {
    try {
        res.json(await admin.getAllAdmActive(req.params.page));
    } catch (err) {
        console.error(`Error`, err.message);
        next(err);
    }
}

async function getAllAdmNotActive(req, res, next) {
    try {
        res.json(await admin.getAllAdmNotActive(req.params.page));
    } catch (err) {
        console.error(`Error`, err.message);
        next(err);
    }
}


async function findAdmId(req, res, next) {
    try {
        res.json(await admin.findAdmId(req.params.id));
    } catch (err) {
        console.error(`Error`, err.message);
        next(err);
    }
}

async function findAdmMail(req, res, next) {
    try {
        res.json(await admin.findAdmMail(req.query.name));
    } catch (err) {
        console.error(`Error`, err.message);
        next(err);
    }
}

async function findAdmName(req, res, next) {
    try {
        res.json(await admin.findAdmName(req.query.name));
    } catch (err) {
        console.error(`Error`, err.message);
        next(err);
    }
}

async function findAdmPhone(req, res, next) {
    try {
        res.json(await admin.findAdmPhone(req.query.name));
    } catch (err) {
        console.error(`Error`, err.message);
        next(err);
    }
}

async function findAdmNotActive(req, res, next) {
    try {
        res.json(await admin.findAdmNotActive(req.query.name));
    } catch (err) {
        console.error(`Error`, err.message);
        next(err);
    }
}

async function findAdmActive(req, res, next) {
    try {
        res.json(await admin.findAdmActive(req.query.name));
    } catch (err) {
        console.error(`Error`, err.message);
        next(err);
    }
}

async function createAdm(req, res, next) {
    try {
        res.json(await admin.createAdm(req.body));
    } catch (err) {
        console.error(`Error`, err.message);
        next(err);
    }
}

async function updateAdm(req, res, next) {
    try {
        res.json(await admin.updateAdm(req.params.id, req.body));
        // console
    } catch (err) {
        console.error(`Error`, err.message);
        next(err);
    }
}

async function removeAdm(req, res, next) {
    try {
        res.json(await admin.removeAdm(req.params.id));
    } catch (err) {
        console.error(`Error`, err.message);
        next(err);
    }
}


module.exports = {
    getAllAdm,
    getAllAdmActive,
    getAllAdmNotActive,
    findAdmId,
    findAdmMail,
    findAdmName,
    findAdmPhone,
    findAdmNotActive,
    findAdmActive,
    createAdm,
    updateAdm,
    removeAdm,
};