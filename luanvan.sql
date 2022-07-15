-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 16, 2022 at 12:00 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `luanvan`
--

-- --------------------------------------------------------

--
-- Table structure for table `chitietdonhang`
--

CREATE TABLE `chitietdonhang` (
  `ID_DONHANG` varchar(100) NOT NULL,
  `ID_SANPHAM` int(11) NOT NULL,
  `SOLUONG` int(11) NOT NULL,
  `GIA` decimal(11,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `chitietdonhang`
--

INSERT INTO `chitietdonhang` (`ID_DONHANG`, `ID_SANPHAM`, `SOLUONG`, `GIA`) VALUES
('202271533957', 1, 2, '5000000'),
('202271534040', 5, 1, '20000000'),
('202271534110', 20, 1, '12000000'),
('20227156178', 1, 1, '5000000'),
('20227156178', 9, 1, '25000000'),
('20227156178', 14, 1, '15000000'),
('202271561716', 1, 1, '5000000'),
('202271561716', 14, 1, '15000000'),
('202271561716', 9, 1, '25000000'),
('202271643552', 19, 4, '1523000');

-- --------------------------------------------------------

--
-- Table structure for table `cpu`
--

CREATE TABLE `cpu` (
  `ID` int(11) NOT NULL,
  `TEN` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cpu`
--

INSERT INTO `cpu` (`ID`, `TEN`) VALUES
(1, 'i3'),
(2, 'i5'),
(3, 'i7'),
(4, 'i9'),
(5, 'XEON'),
(6, 'RYZEN 3'),
(7, 'RYZEN 5'),
(8, 'RYZEN 7'),
(9, 'RYZEN 9'),
(10, 'THREADRIPPER'),
(17, 'CELERON');

-- --------------------------------------------------------

--
-- Table structure for table `donhang`
--

CREATE TABLE `donhang` (
  `ID` varchar(100) NOT NULL,
  `ID_NGUOIDUNG` int(11) NOT NULL,
  `SOLUONG` int(11) NOT NULL,
  `TONG` int(11) NOT NULL,
  `NGAYDAT` datetime NOT NULL,
  `TRANGTHAI` smallint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `donhang`
--

INSERT INTO `donhang` (`ID`, `ID_NGUOIDUNG`, `SOLUONG`, `TONG`, `NGAYDAT`, `TRANGTHAI`) VALUES
('202271533957', 6, 2, 10000000, '2022-07-15 03:39:57', 1),
('202271534040', 12, 1, 20000000, '2022-07-15 03:40:40', 4),
('202271534110', 5, 1, 12000000, '2022-07-15 03:41:10', 2),
('202271561716', 3, 3, 45000000, '2022-07-15 06:17:16', 3),
('20227156178', 4, 3, 45000000, '2022-07-15 06:17:08', 0),
('202271643552', 4, 4, 6092000, '2022-07-16 04:35:52', 0);

-- --------------------------------------------------------

--
-- Table structure for table `hang`
--

CREATE TABLE `hang` (
  `ID` int(11) NOT NULL,
  `TEN` varchar(50) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hang`
--

INSERT INTO `hang` (`ID`, `TEN`) VALUES
(1, 'LENOVO'),
(2, 'ASUS'),
(3, 'MSI'),
(4, 'ACER'),
(5, 'MACBOOK'),
(6, 'HP'),
(7, 'DELL');

-- --------------------------------------------------------

--
-- Table structure for table `hedieuhanh`
--

CREATE TABLE `hedieuhanh` (
  `ID` int(11) NOT NULL,
  `TEN` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `hedieuhanh`
--

INSERT INTO `hedieuhanh` (`ID`, `TEN`) VALUES
(1, 'Window 10'),
(2, 'Window 11'),
(3, 'Mac OS'),
(4, 'Linux');

-- --------------------------------------------------------

--
-- Table structure for table `nguoidung`
--

CREATE TABLE `nguoidung` (
  `ID` int(11) NOT NULL,
  `TEN` varchar(50) CHARACTER SET utf8 NOT NULL,
  `EMAIL` varchar(50) CHARACTER SET utf8 NOT NULL,
  `PASS` varchar(100) CHARACTER SET utf8 NOT NULL,
  `SODIENTHOAI` int(11) NOT NULL,
  `DIACHI` varchar(50) CHARACTER SET utf8 NOT NULL,
  `GIOITINH` tinyint(1) NOT NULL,
  `LOAI` tinyint(1) NOT NULL,
  `TRANGTHAI` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `nguoidung`
--

INSERT INTO `nguoidung` (`ID`, `TEN`, `EMAIL`, `PASS`, `SODIENTHOAI`, `DIACHI`, `GIOITINH`, `LOAI`, `TRANGTHAI`) VALUES
(3, 'khanhduy', 'khanhduy@gmail.com', '$2a$05$M/PeqYdZgcCPN0Hftx7.xuhQodQ.j0HSP9d/UTrn0eDtgWdpQB6aS', 1234567890, '180 cao lo phuong 4 quan 8 tphcm', 0, 0, 1),
(4, 'hải dương', 'haiduong@gmail.com', '$2a$05$Tbf4W9aDScuNdinFZZzmbeFOkX92c4uoJNF.WgKinWwH55Kv3Ea/2', 1234567890, '180 cao lo phuong 4 quan 8 tphcm', 0, 0, 0),
(5, 'phạm  đăng hải dương', 'haiduong1@gmail.com', '$2a$05$A7nGlP1LTkposLzc1I566.AgP5YN2LmCE7TePBNhd55ycS2EnSEM.', 1234567890, '180 cao lo phuong 4 quan 8 tphcm', 0, 1, 0),
(6, 'haiduong', 'kahnhduy1@gmail.com', '$2a$05$KMm4J3UCwiN//RoDKYm3/uBeqdb1RrQlYnAUzPqL9E33H4GXG0hvq', 1234567890, '180 cao lo phuong 4 quan 8 tphcm', 0, 1, 1),
(7, 'khanhduy01', 'khanhduy11147@gmail.com', '$2a$05$BP0pCz7uxs6Enb/O6Whz/ub0Hm6KXFqdNKAk2opImpAz3jQLOb806', 1234567890, '180 cao lo phuong 4 quan 8 tphcm', 0, 1, 0),
(8, 'khanhduy', 'khanhduy111@gmail.com', '$2a$05$uGSdcfF0DPtPTjKQPgC3mOAmY/v5oCzzO4Aron5FmKTOugWt/7l8q', 1234567890, '180 cao lo phuong 4 quan 8 tphcm', 0, 1, 0),
(9, 'haiduong', 'haiduong12@gmail.com', '$2a$05$q6R2A9OYsHU2POYUji62X.ydZdU19e2YkdglibCjRt3o/inQak.1m', 1234567890, '180 cao lo phuong 4 quan 8 tphcm', 0, 0, 0),
(10, 'haiduong', 'haiduong12123@gmail.com', '$2a$05$SskjDTe6Q/AGXxy8AEsPRur6c2fNVHKbci4rEF9v/2UHnl0h7Ry5i', 1234567890, '180 cao lo phuong 4 quan 8 tphcm', 0, 0, 0),
(11, 'hai', 'hai@gmail.com', '$2a$05$JwaIf.UtLH2/XiheAGNgMuv41/iwmKs6eoPH0d1YgZckweXZl1Ph2', 1234567890, '180 cao lỗ', 1, 1, 0),
(12, 'khanh', 'khanh@gmail.com', '$2a$05$KW67IEEtcNm/M1r39eaaqewVxjTi4TmaOblFOmok6Av9G4RCXOs8y', 1234567890, '180 cao lỗ', 1, 1, 0),
(13, 'duong', 'duong@gmail.com', '$2a$05$sSeBkERiIZl77C4bsdbk6O5J3qOwUHX2jogI.3n7eJNXDpByahr0S', 1234567890, '123456', 1, 1, 0),
(14, 'duong', 'd@gmail.com', '$2a$05$V4yAh3U9WUVIYxovUNrXSu1hOV2yILVNdxnQSK6uWUTXM0N.c0z..', 1234567890, '180 cao lỗ', 1, 1, 0),
(15, 'dương', 'u@gmail.com', '$2a$05$pDCUGByYfxEtfR39gjWodeJkZFGNfvXQ3nFalwLH39Q5p/ufcZyP6', 1234567890, '152615646', 1, 0, 0),
(16, 'haiduong', 'hai1245@gmail.com', '$2a$05$98Bpy38Bey/RbqGGfWC4IOz6RcNi0skSiyFpuucoIAFJjXR1538EG', 1234567890, '180 long an', 1, 1, 0),
(17, 'DUY', 'duy@gmail.com', '$2a$05$xQeJQHJaJdWKulXwc7Q9eO1AVnXG988BMWq4CncOkgBKxibVUU.EG', 1234567890, '123456789', 0, 0, 0),
(18, 'duy ', 'duy11@gmail.com', '$2a$05$aNq0VOV047QRVVL5BSfgl.g7F.fgkLo4gK2YpWGqXMweSYJm0pcdW', 1234567890, 'thành phố hồ chí minh', 1, 1, 0),
(19, 'huy', 'huy@gmail.com', '$2a$05$MghWkyy/jxGYDPbpBF8EAezxZ0nAnzIiIuZcc5hZ1iw.SYIBt7psO', 2147483647, '1231456789', 0, 1, 0),
(20, 'khanh', 'khanh@gamil.com', '$2a$05$J.MkLOqBtzBYdxKxY5IUn.Hbm/g7kYPH9dSTz9rSBjSoP7gnBltpO', 1234567890, '87qư86r4qắ', 1, 1, 0),
(21, 'trần khánh duy', 'khahdy@gamil.com', '$2a$05$MtPNzA1IET08eKqKTpD3MOSImcrO0bAyXJ5OiBJtRqay8lgvOpCIG', 1234567890, 'thành phố hồ chí minh', 0, 1, 0),
(22, 'hải dương', 'hidg@gmail.com', '$2a$05$m53m7LBs36kK/6kbmBJQBuQKDXxogqh07VVQUqqLhtglT/m49AK1a', 1234567891, 'thành phố hồ chí minh', 1, 1, 0),
(23, 'trần khánh duy', 'khanh1@gamil.com', '$2a$05$qDZwIhQMidHO2wXuP4phjOMrcS1AMAiSgM8ZaweSrcMJLbC8UGbYq', 1234567890, 'thành phố hồ chí minh', 0, 0, 0),
(24, 'khán', 'khanh@gamil.com', '$2a$05$KOiS44rcSbPRQ90WAK39Ve.ZQy1u8eNgWdl6j3DSZRmHxqbhgXJyO', 1234589710, 'aifghuikqwgifukqh', 0, 0, 0),
(25, 'phạm dương', 'pmdung@gmail.com', '$2a$05$/t/cFhQBOXJraA8fc5yvxOrdyT2fURS2/ehKwZQEUE4g2qE28XHFG', 1234567890, 'thành phố hồ chí minh', 1, 0, 0),
(26, 'dung', 'DY@GMAIL.COM', '$2a$05$Eu8RNf2vK4uOQNwcET8biu3ngZ0Ai9vKalHJg/qU.lQ0QlaRpEjC6', 1234567891, 'thành phố hồ chí minh', 0, 0, 0),
(27, 'hải', 'pham@gmail.com', '$2a$05$ld3jYLlXYe1gD096w.od.eEraCczFL9D33v52HPwxUuCGI4x9P6X6', 1234567890, 'thành phố hồ chí minh', 0, 0, 0),
(28, 'trần', 'tran@gmail.com', '$2a$05$NomQWWj7q3O/1rCdi4YGvuPViFzcus9T3BAHoOSPr0qqli2K9wrDm', 1234567890, 'thành phố hồ chí minh', 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `ocung`
--

CREATE TABLE `ocung` (
  `ID` int(11) NOT NULL,
  `TEN` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `ocung`
--

INSERT INTO `ocung` (`ID`, `TEN`) VALUES
(1, 'HDD'),
(2, 'SSD');

-- --------------------------------------------------------

--
-- Table structure for table `ram`
--

CREATE TABLE `ram` (
  `ID` int(11) NOT NULL,
  `TEN` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `ram`
--

INSERT INTO `ram` (`ID`, `TEN`) VALUES
(1, 'DDR3'),
(2, 'DDR3L'),
(3, 'DDR4'),
(4, 'DDR5');

-- --------------------------------------------------------

--
-- Table structure for table `sanpham`
--

CREATE TABLE `sanpham` (
  `ID` int(11) NOT NULL,
  `TEN` varchar(50) NOT NULL,
  `HEDIEUHANH_ID` int(11) NOT NULL,
  `THUONGHIEU_ID` int(11) NOT NULL,
  `CPU_ID` int(11) NOT NULL,
  `THONGTINCPU` varchar(20) NOT NULL,
  `GIA` decimal(11,0) NOT NULL,
  `OCUNG_ID` int(11) NOT NULL,
  `DUNGLUONGOCUNG` int(11) NOT NULL,
  `RAM_ID` int(11) NOT NULL,
  `DUNGLUONGRAM` int(11) NOT NULL,
  `MOTA` longtext NOT NULL,
  `ANH` varchar(500) NOT NULL,
  `TRANGTHAI` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `sanpham`
--

INSERT INTO `sanpham` (`ID`, `TEN`, `HEDIEUHANH_ID`, `THUONGHIEU_ID`, `CPU_ID`, `THONGTINCPU`, `GIA`, `OCUNG_ID`, `DUNGLUONGOCUNG`, `RAM_ID`, `DUNGLUONGRAM`, `MOTA`, `ANH`, `TRANGTHAI`) VALUES
(1, 'THINKPAD T490', 2, 1, 2, '8250U', '5000000', 2, 500, 3, 16, 'ĐẾN TỪ LENOVO ', 'lenovo-thinkpad-e495-laptoppro-1.jpg', 0),
(3, 'THINKPAD T490', 2, 1, 2, '8250U', '500000', 2, 500, 3, 16, 'ĐẾN TỪ LENOVO', 'macbook-m1-6301-1608832446-901-6791-7036-1644919107.jpg', 1),
(4, 'NITRO5', 2, 4, 4, '9900K', '100000000', 2, 500, 3, 16, 'ĐẾN TỪ ACER', '38186_laptop_dell_latitude_3420_42lt342001_111.png', 0),
(5, 'KATANA', 2, 3, 2, '11400H', '20000000', 2, 512, 3, 8, 'SỬ DỤNG VI XỬ LÍ INTEL® CORE™ I5 THẾ HỆ 11 MỚI NHẤT, HIỆU NĂNG CAO HƠN TỐI ĐA TỚI 40% SO VỚI THẾ HỆ TRƯỚC. MẠNH MẼ HƠN BAO GIỜ HẾT VỚI VI XỬ LÍ 6 NHÂN, XUNG TURBO HAI NHÂN TỐI ĐA TỚI 4.5GHZ GIÚP PHÁT HUY HIỆU SUẤT TỐI ĐA TRONG VIỆC XỬ LÍ GAME, PHẦN MỀM CÔNG VIỆC VÀ TÁC VỤ ĐA NHIỆM.\n\nGEFORCE RTX™ 30 SERIES GPU MANG ĐẾN SỨC MẠNH TỐI THƯỢNG CHO GAME THỦ VÀ NGƯỜI SÁNG TẠO NỘI DUNG. SỬ DỤNG KIẾN TRÚC AMPERE DANH GIÁ ĐÃ ĐẠT NHIỀU GIẢI THƯỞNG UY TÍN —CŨNG LÀ KIẾN TRÚC RTX THẾ HỆ THỨ 2 CỦA NVIDIA —VỚI NHÂN RT VÀ NHÂN TENSOR MỚI, CÙNG VỚI ĐA NHÂN XỬ LÍ STREAMING GIÚP ĐEM LẠI ĐỒ HỌA RAY-TRACING SIÊU CHÂN THỰC VÀ CÁC TÍNH NĂNG AI TÂN TIẾN NHẤT.', 'product_1619086146fdfbc8b34331ebecbf18cb444480b7d1_ac2062f64fe84910a66f33a40a7f03b2.webp', 0),
(6, 'KATANA', 2, 3, 2, '11400H', '20000000', 2, 512, 3, 8, 'SỬ DỤNG VI XỬ LÍ INTEL® CORE™ I5 THẾ HỆ 11 MỚI NHẤT, HIỆU NĂNG CAO HƠN TỐI ĐA TỚI 40% SO VỚI THẾ HỆ TRƯỚC. MẠNH MẼ HƠN BAO GIỜ HẾT VỚI VI XỬ LÍ 6 NHÂN, XUNG TURBO HAI NHÂN TỐI ĐA TỚI 4.5GHZ GIÚP PHÁT HUY HIỆU SUẤT TỐI ĐA TRONG VIỆC XỬ LÍ GAME, PHẦN MỀM CÔNG VIỆC VÀ TÁC VỤ ĐA NHIỆM.\n\nGEFORCE RTX™ 30 SERIES GPU MANG ĐẾN SỨC MẠNH TỐI THƯỢNG CHO GAME THỦ VÀ NGƯỜI SÁNG TẠO NỘI DUNG. SỬ DỤNG KIẾN TRÚC AMPERE DANH GIÁ ĐÃ ĐẠT NHIỀU GIẢI THƯỞNG UY TÍN —CŨNG LÀ KIẾN TRÚC RTX THẾ HỆ THỨ 2 CỦA NVIDIA —VỚI NHÂN RT VÀ NHÂN TENSOR MỚI, CÙNG VỚI ĐA NHÂN XỬ LÍ STREAMING GIÚP ĐEM LẠI ĐỒ HỌA RAY-TRACING SIÊU CHÂN THỰC VÀ CÁC TÍNH NĂNG AI TÂN TIẾN NHẤT.', 'product_1619086146fdfbc8b34331ebecbf18cb444480b7d1_ac2062f64fe84910a66f33a40a7f03b2.webp', 0),
(7, 'KATANA', 2, 3, 2, '11400H', '20000000', 2, 512, 3, 8, 'SỬ DỤNG VI XỬ LÍ INTEL® CORE™ I5 THẾ HỆ 11 MỚI NHẤT, HIỆU NĂNG CAO HƠN TỐI ĐA TỚI 40% SO VỚI THẾ HỆ TRƯỚC. MẠNH MẼ HƠN BAO GIỜ HẾT VỚI VI XỬ LÍ 6 NHÂN, XUNG TURBO HAI NHÂN TỐI ĐA TỚI 4.5GHZ GIÚP PHÁT HUY HIỆU SUẤT TỐI ĐA TRONG VIỆC XỬ LÍ GAME, PHẦN MỀM CÔNG VIỆC VÀ TÁC VỤ ĐA NHIỆM.\n\nGEFORCE RTX™ 30 SERIES GPU MANG ĐẾN SỨC MẠNH TỐI THƯỢNG CHO GAME THỦ VÀ NGƯỜI SÁNG TẠO NỘI DUNG. SỬ DỤNG KIẾN TRÚC AMPERE DANH GIÁ ĐÃ ĐẠT NHIỀU GIẢI THƯỞNG UY TÍN —CŨNG LÀ KIẾN TRÚC RTX THẾ HỆ THỨ 2 CỦA NVIDIA —VỚI NHÂN RT VÀ NHÂN TENSOR MỚI, CÙNG VỚI ĐA NHÂN XỬ LÍ STREAMING GIÚP ĐEM LẠI ĐỒ HỌA RAY-TRACING SIÊU CHÂN THỰC VÀ CÁC TÍNH NĂNG AI TÂN TIẾN NHẤT.', 'product_1619086146fdfbc8b34331ebecbf18cb444480b7d1_ac2062f64fe84910a66f33a40a7f03b2.webp', 0),
(8, 'NITRO 5 EAGLE AN515 57 54MV', 2, 4, 2, '11400H', '21000000', 2, 512, 3, 16, 'VỚI SỰ KẾT HỢP TỪ CPU CORE I5 -11400H VÀ GPU NVIDIA GEFORCE RTX 3050, LAPTOP ACER NITRO 5 EAGLE AN515-57 SẼ CHO CHÚNG TA HIỆU NĂNG TỐT ĐỂ XỬ LÝ CÁC CÔNG VIỆC ĐỒ HỌA ĐƠN GIẢN TRÊN CÁC PHẦN MỀM CHUYÊN DỤNG, TỐC ĐỘ XỬ LÝ THÔNG TIN CŨNG TƯƠNG ĐỐI NHANH VÀ MƯỢT. \n\nCÙNG VỚI ĐÓ RAM 8 GB CÓ KHẢ NĂNG NÂNG CẤP TỐI ĐA LÊN ĐẾN 32 GB GIÚP ĐA NHIỆM TỐT, THOẢI MÁI SỬ DỤNG NHIỀU ỨNG DỤNG CÙNG LÚC HAY MỞ NHIỀU TAB CHROME.\n\nNGOÀI RA, ACER GAMING NITRO 5 EAGLE AN515-57-54MV CÒN ĐƯỢC TRANG BỊ SSD M.2 VỚI 512GB VẬN HÀNH NHANH, PHẢN HỒI MỌI TÁC VỤ CHỈ TRONG VÀI GIÂY. CÙNG VỚI ĐÓ, ACER CŨNG TRANG BỊ KHE CẮM HDD CHO NGƯỜI DÙNG CÓ NHU CẦU NÂNG CẤP KHÔNG GIAN LƯU TRỮ.', 'nitro_5_eagle__3__a52ef47b567b48ceb1d7b6f8078e2c07.webp', 0),
(9, 'TUF A15 FA507RC HN051W', 2, 2, 8, '6800H', '25000000', 2, 512, 3, 16, 'ĐẾN TỪ ASUS', 'gearvn-laptop-gaming-asus-tuf-a15-fa507rc-hn051w-1_c5df613e590d466696cd74ed2f30ce2d.webp', 0),
(10, 'BRAVO 15 B5DD 276VN', 2, 3, 7, '5600H', '15000000', 2, 512, 3, 16, 'ĐẾN TỪ MSI', 'gearvn-laptop-gaming-msi-bravo-15-b5dd-276vn-5_bc5418ca2d9f499895ddd4f20a563fa6.webp', 0),
(11, 'BRAVO 15 B5DD 276VN', 2, 3, 7, '5600H', '15000000', 2, 512, 3, 16, 'ĐẾN TỪ MSI', 'gearvn-laptop-gaming-msi-bravo-15-b5dd-276vn-5_bc5418ca2d9f499895ddd4f20a563fa6.webp', 0),
(12, 'BRAVO 15 B5DD 276VN', 2, 3, 7, '5600H', '15000000', 2, 512, 3, 16, 'ĐẾN TỪ MSI', 'gearvn-laptop-gaming-msi-bravo-15-b5dd-276vn-5_bc5418ca2d9f499895ddd4f20a563fa6.webp', 0),
(13, 'BRAVO 15 B5DD 276VN', 2, 3, 7, '5600H', '15000000', 2, 512, 3, 16, 'ĐẾN TỪ MSI', 'gearvn-laptop-gaming-msi-bravo-15-b5dd-276vn-5_bc5418ca2d9f499895ddd4f20a563fa6.webp', 0),
(14, 'BRAVO 15 B5DD 276VN', 2, 3, 7, '5600H', '15000000', 2, 512, 3, 16, 'ĐẾN TỪ MSI', 'gearvn-laptop-gaming-msi-bravo-15-b5dd-276vn-5_bc5418ca2d9f499895ddd4f20a563fa6.webp', 0),
(15, 'BRAVO 15 B5DD 276VN', 2, 3, 7, '5600H', '15000000', 2, 512, 3, 16, 'ĐẾN TỪ MSI', 'gearvn-laptop-gaming-msi-bravo-15-b5dd-276vn-5_bc5418ca2d9f499895ddd4f20a563fa6.webp', 0),
(18, 'QFW', 4, 2, 3, 'QỪQỪ', '1234124', 2, 214214, 1, 21421, '12421412', 'gearvn-laptop-gaming-asus-tuf-a15-fa507rc-hn051w-1_c5df613e590d466696cd74ed2f30ce2d.webp', 0),
(19, 'THINKPAD E14', 2, 1, 8, '6500U', '1523000', 2, 512, 3, 16, 'OKE', '36154_thinkpad_e14_ct1_03.png', 0),
(20, 'MACBOOK PRO', 3, 5, 2, '8250U', '12000000', 2, 512, 3, 17, 'SẢN PHẨM ĐẾN TỪ APPLE', 'macbook-m1-6301-1608832446-901-6791-7036-1644919107.jpg', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chitietdonhang`
--
ALTER TABLE `chitietdonhang`
  ADD KEY `ID_DONHANG` (`ID_DONHANG`),
  ADD KEY `ID_sanpham` (`ID_SANPHAM`);

--
-- Indexes for table `cpu`
--
ALTER TABLE `cpu`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `donhang`
--
ALTER TABLE `donhang`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ID_NGUOIDUNG` (`ID_NGUOIDUNG`);

--
-- Indexes for table `hang`
--
ALTER TABLE `hang`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `hedieuhanh`
--
ALTER TABLE `hedieuhanh`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `nguoidung`
--
ALTER TABLE `nguoidung`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `ocung`
--
ALTER TABLE `ocung`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `ram`
--
ALTER TABLE `ram`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `sanpham`
--
ALTER TABLE `sanpham`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `CPU` (`CPU_ID`),
  ADD KEY `RAM` (`RAM_ID`),
  ADD KEY `HEDIEUHANH` (`HEDIEUHANH_ID`),
  ADD KEY `HANG` (`THUONGHIEU_ID`),
  ADD KEY `OCUNG` (`OCUNG_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cpu`
--
ALTER TABLE `cpu`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `hang`
--
ALTER TABLE `hang`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `hedieuhanh`
--
ALTER TABLE `hedieuhanh`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `nguoidung`
--
ALTER TABLE `nguoidung`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `ocung`
--
ALTER TABLE `ocung`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `ram`
--
ALTER TABLE `ram`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `sanpham`
--
ALTER TABLE `sanpham`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `chitietdonhang`
--
ALTER TABLE `chitietdonhang`
  ADD CONSTRAINT `ID_DONHANG` FOREIGN KEY (`ID_DONHANG`) REFERENCES `donhang` (`ID`),
  ADD CONSTRAINT `ID_sanpham` FOREIGN KEY (`ID_SANPHAM`) REFERENCES `sanpham` (`ID`);

--
-- Constraints for table `donhang`
--
ALTER TABLE `donhang`
  ADD CONSTRAINT `ID_NGUOIDUNG` FOREIGN KEY (`ID_NGUOIDUNG`) REFERENCES `nguoidung` (`ID`);

--
-- Constraints for table `sanpham`
--
ALTER TABLE `sanpham`
  ADD CONSTRAINT `CPU` FOREIGN KEY (`CPU_ID`) REFERENCES `cpu` (`ID`),
  ADD CONSTRAINT `HANG` FOREIGN KEY (`THUONGHIEU_ID`) REFERENCES `hang` (`ID`),
  ADD CONSTRAINT `HEDIEUHANH` FOREIGN KEY (`HEDIEUHANH_ID`) REFERENCES `hedieuhanh` (`ID`),
  ADD CONSTRAINT `OCUNG` FOREIGN KEY (`OCUNG_ID`) REFERENCES `ocung` (`ID`),
  ADD CONSTRAINT `RAM` FOREIGN KEY (`RAM_ID`) REFERENCES `ram` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
