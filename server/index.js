/** @format */

const express = require("express");
const app = express();
require("dotenv").config();
const bodyParser = require("body-parser");
const port = process.env.PORT;
const programmingLanguagesRouter = require("./src/routes/programmingLanguages.route");
const cors = require("cors");
const userRouter = require("./src/routes/user.route");
const adminRouter = require("./src/routes/admin.route");
const productRouter = require("./src/routes/product.route");
const busboyBodyParser = require("busboy-body-parser");

const fileUpload = require("express-fileupload");

app.use(cors());

app.use(express.json());

app.use(
	bodyParser.urlencoded({
		extended: true,
	}),
);

app.use(express.static("uploads"));

app.use(fileUpload());

app.use(bodyParser.json());

// app.use(busboyBodyParser());

app.get("/", (req, res) => {
	// res.json({ message: "ok" });
	res.json(`Server is running`);
});

// app.post('/resgister', (req, res) => {
//   res.json({ 'message': 'success' });
// })

app.use("/programming-languages", programmingLanguagesRouter);

app.use("/user", userRouter);

app.use("/admin", adminRouter);

app.use("/product", productRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
	const statusCode = err.statusCode || 500;
	console.error(err.message, err.stack);
	res.status(statusCode).json({
		message: err.message,
	});

	return;
});

app.post("/upload", (req, res) => {
	if (!req.files) {
		return res.status(500).send({ msg: "KHÔNG CÓ ẢNH" });
	}
	// accessing the file
	const myFile = req.files.file;

	//  mv() method places the file inside public directory
	myFile.mv(`${__dirname}/uploads/${myFile.name}`, function (err) {
		if (err) {
			console.log(err);
			return res.status(500).send({ msg: err });
		}
		// returing the response with file path and name
		return res.send({
			name: myFile.name,
			path: `/${myFile.name}`,
			msg: "CHỌN THÀNH CÔNG",
		});
	});
});

app.listen(port, "0.0.0.0", () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
