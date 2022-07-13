/** @format */

const db = require("./db.service");

async function createOder(order) {
	const orderCode = order.DATE.replace(/([^0-9])/g, "");
	const result1 = await db.query(
		`INSERT INTO DONHANG
			(ID,ID_NGUOIDUNG,SOLUONG,TONG,NGAYDAT,TRANGTHAI)
		VALUES
			(?, ?, ?, ?, ?, 0)`,
		[orderCode, order.ID, order.QTY, order.SUM, order.DATE],
	);

	order.CART.forEach(async (e) => {
		const result2 = await db.query(
			`INSERT INTO CHITIETDONHANG
					(ID_DONHANG,ID_SANPHAM,SOLUONG,GIA)
				VALUES
					(?, ?, ?, ?)`,
			[orderCode, e.ID, e.SL, e.GIA],
		);
	});

	return "ĐẶT HÀNG THÀNH CÔNG";
}

module.exports = { createOder };
