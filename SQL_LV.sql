<<<<<<< HEAD
CREATE TABLE NGUOIDUNG (
    ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    TEN NVARCHAR (50) NOT NULL,
    EMAIL NVARCHAR (50) NOT NULL,
    PASS NVARCHAR (50) NOT NULL,
    PHONE INT NOT NULL,
    DIACHI NVARCHAR (50) NOT NULL,
    LOAI BOOLEAN NOT NULL,
    TRANGTHAI BOOLEAN NOT NULL
);

CREATE TABLE DANHMUC (
    ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    TEN NVARCHAR (50) NOT NULL,
    TRANGTHAI BOOLEAN NOT NULL
);

CREATE TABLE HANG (
    ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    TEN NVARCHAR (50) NOT NULL,
    TRANGTHAI BOOLEAN NOT NULL
);

CREATE TABLE SANPHAM (
    ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    TEN NVARCHAR (50) NOT NULL,
    DANHMUCSP INT NOT NULL,
    HANGSP INT NOT NULL,
    TRANGTHAI BOOLEAN NOT NULL,
    CONSTRAINT DANHMUC FOREIGN KEY (DANHMUCSP) REFERENCES DANHMUC (ID),
    CONSTRAINT HANG FOREIGN KEY (HANGSP) REFERENCES HANG (ID)
);

CREATE TABLE CHITIET_SP (
    SANPHAM_ID INT NOT NULL,
    CONSTRAINT SANPHAM FOREIGN KEY (SANPHAM_ID) REFERENCES SANPHAM (ID),
    CPU NVARCHAR (50) DEFAULT NULL,
    RAM NVARCHAR (50) DEFAULT NULL,
    HEDIEUHANH NVARCHAR (50) DEFAULT NULL,
    OCUNG NVARCHAR (50) DEFAULT NULL,
    ANH NVARCHAR (50) NOT NULL,
    MOTA NVARCHAR (500) NOT NULL
);

use luanvan
SELECT
    SP.ID,
    DM.TEN AS LOAI,
    H.TEN AS HANG,
    SP.TEN AS TENSP,
    CT.CPU,
    CT.RAM,
    CT.HEDIEUHANH,
    CT.OCUNG,
    CT.ANH,
    CT.MOTA,
    SP.TRANGTHAI
FROM
    SANPHAM SP
    JOIN DANHMUC DM ON DM.ID = SP.DANHMUCSP
    JOIN HANG H ON H.ID = SP.HANGSP
    JOIN CHITIET_SP CT ON SP.ID = CT.SANPHAM_ID;

SELECT
    *
FROM
    chitiet_sp
=======
CREATE TABLE NGUOIDUNG (
    ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    TEN NVARCHAR (50) NOT NULL,
    EMAIL NVARCHAR (50) NOT NULL,
    PASS NVARCHAR (50) NOT NULL,
    PHONE INT NOT NULL,
    ADDRESS NVARCHAR (50) NOT NULL,
    TYPE BOOLEAN NOT NULL,
    STATUS BOOLEAN NOT NULL
);

CREATE TABLE DANHMUC (
    ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    TENDANHMUC NVARCHAR (50) NOT NULL
);

CREATE TABLE CHITIET (
    ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    DUNGLUONG NVARCHAR (50) NOT NULL,
    ANH NVARCHAR (50) NOT NULL,
    MOTA NVARCHAR (500) NOT NULL
);

CREATE TABLE SANPHAM (
    ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    TEN NVARCHAR (50) NOT NULL,
    CHITIETSP INT NOT NULL,
    DANHMUCSP INT NOT NULL,
    CONSTRAINT CHITIET FOREIGN KEY (CHITIETSP) REFERENCES CHITIET (ID),
    CONSTRAINT DANHMUC FOREIGN KEY (DANHMUCSP) REFERENCES DANHMUC (ID)
);

SELECT
    *
FROM
    SANPHAM SP
    INNER JOIN DANHMUC DM ON SP.ID = DM.ID
    INNER JOIN CHITIET CT ON CT.ID = SP.ID
>>>>>>> 35ddd6a7889448f5097a843969c6da19e2ace370