-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 06, 2022 at 07:52 PM
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
-- Database: `web`
--

-- --------------------------------------------------------

--
-- Table structure for table `list`
--

CREATE TABLE `list` (
  `list_id` int(11) NOT NULL,
  `list_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `list`
--

INSERT INTO `list` (`list_id`, `list_name`) VALUES
(1, 'Thể Thao'),
(2, 'Adidas '),
(3, 'NIKE '),
(4, 'Puma '),
(5, 'Gucci '),
(6, 'Vans ');

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `order_id` int(11) NOT NULL,
  `order_name` varchar(30) NOT NULL,
  `order_date` datetime NOT NULL,
  `order_status` varchar(15) NOT NULL,
  `order_amount` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `order_detail`
--

CREATE TABLE `order_detail` (
  `order_id` int(11) NOT NULL,
  `product_id` varchar(15) NOT NULL,
  `quaility` varchar(30) NOT NULL,
  `price_sale` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `product_id` varchar(15) NOT NULL,
  `product_name` varchar(30) NOT NULL,
  `product_price` int(11) NOT NULL,
  `product_img` varchar(30) NOT NULL,
  `list_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`product_id`, `product_name`, `product_price`, `product_img`, `list_id`) VALUES
('ANKLE ', 'ANKLE STRAP', 2000000, 'p7.jpg', 2),
('ES ', 'BLACK LACE HEELS', 2000000, 'p1.jpg', 1),
('ES4535', 'KITTEN HEELS', 2000000, 'p2.jpg', 4),
('JANE', 'MARY JANE', 1900000, 'p4.jpg', 5),
('ME3201', 'SLINGBACK', 1500000, 'p3.jpg', 5),
('S5', 'T-STRAP', 1800000, 'p4.jpg', 4),
('SB', 'LOUIS VUITTON', 1500000, 'p5.jpg', 5),
('STRAP', ' ANKLE STRAP', 2000000, 'p4.jpg', 3),
('VANS', ' VANS', 1756000, 'p4.jpg', 6),
('VUITTON', 'LOUIS VUITTON', 1750000, 'p4.jpg', 5),
('WEDGE ', 'WEDGE SHOE', 1550000, 'p6.jpg', 4);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(30) NOT NULL,
  `user_email` varchar(30) NOT NULL,
  `user_pass` int(11) NOT NULL,
  `user_phone` int(11) NOT NULL,
  `user_address` varchar(50) NOT NULL,
  `user_type` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `user_name`, `user_email`, `user_pass`, `user_phone`, `user_address`, `user_type`) VALUES
(1, 'haiduong', '123@gmail.com', 123456, 655416412, '180 cao lỗ', 0),
(2, 'haiduong', '123@gmail.com', 123456, 655416412, '180 cao lỗ', 0),
(3, 'haiduong', '123@gmail.com', 123456, 655416412, '180 cao lỗ', 0),
(4, 'haiduong', '123@gmail.com', 123456, 655416412, '180 cao lỗ', 0),
(5, 'haiduong', '123@gmail.com', 123456, 655416412, '180 cao lỗ', 0),
(6, 'khánh duy', 'khanhduy@gmail.com', 123456, 1234567, '180 Cao Lỗ', 0),
(7, 'khánh duy', 'khanhduy@gmail.com', 123456, 1234567, '180 Cao Lỗ', 0),
(8, 'haiduong', '123@gmail.com', 123456, 655416412, '180 cao lỗ', 0),
(9, 'haiduong', '123@gmail.com', 123456, 655416412, '180 cao lỗ', 0),
(10, 'duy dương', 'duy@gmail.com', 123456, 655416412, '180 cao lỗ', 0),
(11, 'duy dương', 'duy@gmail.com', 123456, 655416412, '180 cao lỗ', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `list`
--
ALTER TABLE `list`
  ADD PRIMARY KEY (`list_id`);

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `order_detail`
--
ALTER TABLE `order_detail`
  ADD KEY `order_id` (`order_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `list_id` (`list_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `order`
--
ALTER TABLE `order`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `order`
--
ALTER TABLE `order`
  ADD CONSTRAINT `order_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

--
-- Constraints for table `order_detail`
--
ALTER TABLE `order_detail`
  ADD CONSTRAINT `order_detail_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `order` (`order_id`),
  ADD CONSTRAINT `order_detail_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`);

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`list_id`) REFERENCES `list` (`list_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
