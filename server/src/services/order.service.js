/** @format */

const db = require("./db.service");

async function createOrder(order) {
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

async function getAllOrder() {
	return await db.query(
		`SELECT
			DH.ID,
			ND.TEN,
			ND.SODIENTHOAI,
			DH.SOLUONG,
			DH.TONG,
			DH.NGAYDAT,
			DH.TRANGTHAI
		FROM
			DONHANG DH
			JOIN NGUOIDUNG ND ON DH.ID_NGUOIDUNG = ND.ID
		ORDER BY
    		DH.TRANGTHAI ASC`,
	);
}

async function getOrderDetail(id) {
	return await db.query(
		`SELECT
			ND.TEN,
			ND.SODIENTHOAI,
			ND.EMAIL,
			ND.DIACHI,
			DH.ID,
			SP.ANH,
			H.TEN AS THUONGHIEU,
			SP.TEN AS TENSP,
			CT.SOLUONG,
			CT.GIA
		FROM
			DONHANG DH
			JOIN CHITIETDONHANG CT ON DH.ID = CT.ID_DONHANG
			JOIN SANPHAM SP ON CT.ID_SANPHAM = SP.ID
			JOIN HANG H ON H.ID = SP.THUONGHIEU_ID
			JOIN NGUOIDUNG ND ON ND.ID = DH.ID_NGUOIDUNG
		WHERE
			DH.ID = ?`,
		[id],
	);
}

async function getOrderUser(id) {
	return await db.query(
		`SELECT
			DH.ID,
			ND.TEN,
			ND.SODIENTHOAI,
			DH.SOLUONG,
			DH.TONG,
			DH.NGAYDAT,
			DH.TRANGTHAI
		FROM
			DONHANG DH
			JOIN NGUOIDUNG ND ON DH.ID_NGUOIDUNG = ND.ID
		WHERE
			DH.ID_NGUOIDUNG=?`,
		[id],
	);
}

module.exports = {
	createOrder,
	getAllOrder,
	getOrderDetail,
	getOrderUser,
};
