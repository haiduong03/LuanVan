/** @format */


const admin = require("../services/admin.service");

async function getAllAdm(req, res, next) {
    try {
        res.json(await admin.getAllAdm());
    } catch (err) {
        console.error(`Error`, err.message);
        next(err);
    }
}

async function getAllAdmActive(req, res, next) {
    try {
        res.json(await admin.getAllAdmActive());
    } catch (err) {
        console.error(`Error`, err.message);
        next(err);
    }
}

async function getAllAdmNotActive(req, res, next) {
    try {
        res.json(await admin.getAllAdmNotActive());
    } catch (err) {
        console.error(`Error`, err.message);
        next(err);
    }
}


async function findAdmId(req, res, next) {
    try {
        res.json(await admin.findAdmId(req.body.ID));
    } catch (err) {
        console.error(`Error`, err.message);
        next(err);
    }
}

async function findAdmMail(req, res, next) {
    try {
        res.json(await admin.findAdmMail(req.body.EMAIL));
    } catch (err) {
        console.error(`Error`, err.message);
        next(err);
    }
}

async function findAdmName(req, res, next) {
    try {
        res.json(await admin.findAdmName(req.body.TEN));
    } catch (err) {
        console.error(`Error`, err.message);
        next(err);
    }
}

async function findAdmPhone(req, res, next) {
    try {
        res.json(await admin.findAdmPhone(req.body.SODIENTHOAI));
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
        res.json(await admin.updateAdm(req.body.ID, req.body));
    } catch (err) {
        console.error(`Error`, err.message);
        next(err);
    }
}

async function removeAdm(req, res, next) {
    try {
        res.json(await admin.removeAdm(req.body.ID));
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
    createAdm,
    updateAdm,
    removeAdm,
};