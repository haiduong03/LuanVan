-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 28, 2022 at 06:29 PM
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
-- Table structure for table `chitiet_sp`
--

CREATE TABLE `chitiet_sp` (
  `SANPHAM_ID` int(11) NOT NULL,
  `CPU` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `RAM` int(11) DEFAULT NULL,
  `HEDIEUHANH` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `OCUNG` varchar(50) DEFAULT NULL,
  `ANH` varchar(50) CHARACTER SET utf8 NOT NULL,
  `MOTA` varchar(500) CHARACTER SET utf8 NOT NULL,
  `GIA` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `danhmuc`
--

CREATE TABLE `danhmuc` (
  `ID` int(11) NOT NULL,
  `TEN` varchar(50) CHARACTER SET utf8 NOT NULL,
  `TRANGTHAI` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `hang`
--

CREATE TABLE `hang` (
  `ID` int(11) NOT NULL,
  `TEN` varchar(50) CHARACTER SET utf8 NOT NULL,
  `TRANGTHAI` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `nguoidung`
--

CREATE TABLE `nguoidung` (
  `ID` int(11) NOT NULL,
  `TEN` varchar(50) CHARACTER SET utf8 NOT NULL,
  `EMAIL` varchar(50) CHARACTER SET utf8 NOT NULL,
  `PASS` varchar(50) CHARACTER SET utf8 NOT NULL,
  `SODIENTHOAI` int(11) NOT NULL,
  `DIACHI` varchar(50) CHARACTER SET utf8 NOT NULL,
  `GIOITINH` tinyint(1) NOT NULL,
  `LOAI` tinyint(1) NOT NULL,
  `TRANGTHAI` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `sanpham`
--

CREATE TABLE `sanpham` (
  `ID` int(11) NOT NULL,
  `TEN` varchar(50) CHARACTER SET utf8 NOT NULL,
  `DANHMUCSP` int(11) NOT NULL,
  `HANGSP` int(11) NOT NULL,
  `TRANGTHAI` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chitiet_sp`
--
ALTER TABLE `chitiet_sp`
  ADD KEY `SANPHAM` (`SANPHAM_ID`);

--
-- Indexes for table `danhmuc`
--
ALTER TABLE `danhmuc`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `hang`
--
ALTER TABLE `hang`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `nguoidung`
--
ALTER TABLE `nguoidung`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `sanpham`
--
ALTER TABLE `sanpham`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `DANHMUC` (`DANHMUCSP`),
  ADD KEY `HANG` (`HANGSP`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `danhmuc`
--
ALTER TABLE `danhmuc`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `hang`
--
ALTER TABLE `hang`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `nguoidung`
--
ALTER TABLE `nguoidung`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sanpham`
--
ALTER TABLE `sanpham`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `chitiet_sp`
--
ALTER TABLE `chitiet_sp`
  ADD CONSTRAINT `SANPHAM` FOREIGN KEY (`SANPHAM_ID`) REFERENCES `sanpham` (`ID`);

--
-- Constraints for table `sanpham`
--
ALTER TABLE `sanpham`
  ADD CONSTRAINT `DANHMUC` FOREIGN KEY (`DANHMUCSP`) REFERENCES `danhmuc` (`ID`),
  ADD CONSTRAINT `HANG` FOREIGN KEY (`HANGSP`) REFERENCES `hang` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
