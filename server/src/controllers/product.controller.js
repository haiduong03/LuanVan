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

async function findProById(req, res, next) {
	try {
		res.json(await product.findProById(req.params.id));
	} catch (err) {
		console.error(`Error`, err.message);
		next(err);
	}
}

async function findSpecProById(req, res, next) {
	try {
		res.json(await product.findSpecProById(req.params.id));
	} catch (err) {
		console.error(`Error`, err.message);
		next(err);
	}
}

async function findProByName(req, res, next) {
	try {
		res.json(await product.findProByName(req.params.name));
	} catch (err) {
		console.error(`Error`, err.message);
		next(err);
	}
}

async function findProByBrand(req, res, next) {
	try {
		res.json(await product.findProByBrand(req.params.brand));
		// console.log(req.params.brand);
	} catch (err) {
		console.error(`Error`, err.message);
		next(err);
	}
}

async function findProByCpu(req, res, next) {
	try {
		res.json(await product.findProByCpu(req.params.cpu));
	} catch (err) {
		console.error(`Error`, err.message);
		next(err);
	}
}

async function findProByRam(req, res, next) {
	try {
		res.json(await product.findProByRam(req.params.ram));
	} catch (err) {
		console.error(`Error`, err.message);
		next(err);
	}
}

async function findProByOS(req, res, next) {
	try {
		res.json(await product.findProByOS(req.params.os));
	} catch (err) {
		console.error(`Error`, err.message);
		next(err);
	}
}

async function findProByDrive(req, res, next) {
	try {
		res.json(await product.findProByDrive(req.params.drive));
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

async function addBrand(req, res, next) {
	try {
		res.json(await product.addBrand(req.params.name));
	} catch (err) {
		console.error(`Error`, err.message);
		next(err);
	}
}

async function getAllCpu(req, res, next) {
	try {
		res.json(await product.getAllCpu());
	} catch (err) {
		console.error(`Error`, err.message);
		next(err);
	}
}

async function addCpu(req, res, next) {
	try {
		res.json(await product.addCpu(req.params.name));
		// console.log(req.params.name);
	} catch (err) {
		console.error(`Error`, err.message);
		next(err);
	}
}

async function getAllRam(req, res, next) {
	try {
		res.json(await product.getAllRam());
	} catch (err) {
		console.error(`Error`, err.message);
		next(err);
	}
}

async function addRam(req, res, next) {
	try {
		res.json(await product.addRam(req.params.name));
	} catch (err) {
		console.error(`Error`, err.message);
		next(err);
	}
}

async function getAllDrive(req, res, next) {
	try {
		res.json(await product.getAllDrive());
	} catch (err) {
		console.error(`Error`, err.message);
		next(err);
	}
}

async function addDrive(req, res, next) {
	try {
		res.json(await product.addDrive(req.params.name));
	} catch (err) {
		console.error(`Error`, err.message);
		next(err);
	}
}

async function getAllOS(req, res, next) {
	try {
		res.json(await product.getAllOS());
	} catch (err) {
		console.error(`Error`, err.message);
		next(err);
	}
}

async function addOS(req, res, next) {
	try {
		res.json(await product.addOS(req.params.name));
	} catch (err) {
		console.error(`Error`, err.message);
		next(err);
	}
}

async function addProduct(req, res, next) {
	try {
		res.json(await product.addProduct(req.body));
		// console.log(req.body);
	} catch (err) {
		console.error(`Error`, err.message);
		next(err);
	}
}

async function updateProduct(req, res, next) {
	try {
		res.json(await product.updateProduct(req.params.id, req.body));
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

async function activeProduct(req, res, next) {
	try {
		res.json(await product.activeProduct(req.params.id));
	} catch (err) {
		console.error(`Error`, err.message);
		next(err);
	}
}

module.exports = {
	getAllPro,
	getAllProActive,
	findSpecProById,
	findProById,
	findProByName,
	findProByBrand,
	findProByCpu,
	findProByRam,
	findProByOS,
	findProByDrive,
	getAllBrand,
	addBrand,
	getAllCpu,
	addCpu,
	getAllRam,
	addRam,
	getAllDrive,
	addDrive,
	getAllOS,
	addOS,
	addProduct,
	updateProduct,
	removeProduct,
	activeProduct,
};
