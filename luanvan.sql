-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
<<<<<<< Updated upstream
-- Generation Time: Jun 19, 2022 at 06:43 AM
=======
-- Generation Time: Jun 16, 2022 at 09:00 PM
>>>>>>> Stashed changes
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
-- Table structure for table `list`
--

CREATE TABLE `list` (
  `list_id` int(11) NOT NULL,
<<<<<<< Updated upstream
  `list_name` varchar(30) NOT NULL,
  `list_status` tinyint(1) NOT NULL
=======
  `list_name` varchar(30) NOT NULL
>>>>>>> Stashed changes
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `list`
--

<<<<<<< Updated upstream
INSERT INTO `list` (`list_id`, `list_name`, `list_status`) VALUES
(1, 'Thể Thao', 0),
(2, 'Adidas ', 0),
(3, 'NIKE ', 0),
(4, 'Puma ', 0),
(5, 'Gucci ', 0),
(6, 'Vans ', 0);
=======
INSERT INTO `list` (`list_id`, `list_name`) VALUES
(1, 'Thể Thao'),
(2, 'Adidas '),
(3, 'NIKE '),
(4, 'Puma '),
(5, 'Gucci '),
(6, 'Vans ');
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `product_id` varchar(15) NOT NULL,
  `product_name` varchar(30) NOT NULL,
  `product_decryption` varchar(10000) NOT NULL,
  `product_price` int(11) NOT NULL,
  `product_img` longblob NOT NULL,
  `list_id` int(11) NOT NULL,
  `product_status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
=======
>>>>>>> Stashed changes

-- --------------------------------------------------------

--
-- Table structure for table `token`
--

<<<<<<< Updated upstream
CREATE TABLE `token` (
  `accessToken` varchar(100) NOT NULL,
  `refreshToken` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
=======
CREATE TABLE `product` (
  `product_id` varchar(15) NOT NULL,
  `product_name` varchar(30) NOT NULL,
  `product_price` int(11) NOT NULL,
  `product_img` varchar(30) NOT NULL,
  `list_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
>>>>>>> Stashed changes

--
-- Dumping data for table `token`
--

<<<<<<< Updated upstream
INSERT INTO `token` (`accessToken`, `refreshToken`) VALUES
('asnjgbjhsbdajgbasbklJHVBHJGFHJASBKJABJFKjkq2ryi81264ri1yiy412yiuergrftgactbrutba77', 'agjkhauiytguikakmfbashjfgyuaweguyfgaksjgvfjkhagfyjkadgwstuyrftgyuwaetfguyg');
=======
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
>>>>>>> Stashed changes

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(30) NOT NULL,
  `user_email` varchar(30) NOT NULL,
  `user_pass` varchar(100) NOT NULL,
  `user_phone` int(11) NOT NULL,
  `user_address` varchar(50) NOT NULL,
  `user_type` tinyint(1) NOT NULL,
  `user_status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `user_name`, `user_email`, `user_pass`, `user_phone`, `user_address`, `user_type`, `user_status`) VALUES
(1, 'haiduong', '1234@gmail.com', '123456', 655416412, '180 cao lỗ', 0, 1),
(2, 'haiduong', '1235@gmail.com', '123456', 655416412, '180 cao lỗ', 0, 0),
(3, 'haiduong', '1236@gmail.com', '123456', 655416412, '180 cao lỗ', 0, 0),
(4, 'haiduong', '1237@gmail.com', '123456', 655416412, '180 cao lỗ', 0, 0),
(6, 'khánh duy', 'khanhduy@gmail.com', '123456', 1234567, '180 Cao Lỗ', 0, 0),
(7, 'khánh duy', 'khanhduy@gmail.com', '123456', 1234567, '180 Cao Lỗ', 0, 0),
(8, 'haiduong', '1238@gmail.com', '123456', 655416412, '180 cao lỗ', 0, 0),
<<<<<<< Updated upstream
(9, 'haiduong', '1239@gmail.com', '123456', 655416412, '180 cao lỗ', 1, 0),
=======
(9, 'haiduong', '1239@gmail.com', '123456', 655416412, '180 cao lỗ', 0, 0),
>>>>>>> Stashed changes
(10, 'duy dương', 'duy@gmail.com', '123456', 655416412, '180 cao lỗ', 0, 0),
(11, 'duy dương', 'duy@gmail.com', '123456', 655416412, '180 cao lỗ', 0, 0),
(12, 'haiduong', '1239@gmail.com', '123456', 655416412, '180 cao lỗ', 0, 0),
(13, 'khanh', '123989745@gmail.com', '0', 655416412, '180 cao lỗ', 0, 0),
<<<<<<< Updated upstream
(14, 'khanh', '12398974@gmail.com', '$2a$05$ZEIBOMIAEHTjpG6AN.JeSuoFdQzu1ncs059azTFZnjVMJZrdU5FfO', 655416412, '180 cao lỗ', 1, 1),
(15, 'khanh', '1239894@gmail.com', '$2a$05$17tEmbJ5QcSFZNy8DECxUuH3zO51yBqsaSuwr1sOPvouA6qQ8pZ3m', 655416412, '180 cao lỗ', 1, 0),
(16, 'khanh', '12398@gmail.com', '$2a$05$oZY7dF0hLz.KsdfmBD7Sme75iAuXtQ3S8zcJQ/nLJp65JtEa89BWe', 655416412, '180 cao lỗ', 0, 0),
(17, 'khanh', '12398df@gmail.com', '$2a$05$36eFhwInv0tgumvpIRf1BuQrXVHtgEZPgAMEEUdtHRa..23Q2HCNq', 655416412, '180 cao lỗ', 0, 0),
(18, 'khanh', '12398asddf@gmail.com', '$2a$05$J1RUeGR8vjWwGYuu1NRlOueLs9Ona3puA2TAxpAhFwzfBiWlx3SDm', 2147483647, '180 cao lỗ', 0, 0);
=======
(14, 'khanh', '12398974@gmail.com', '$2a$05$ZEIBOMIAEHTjpG6AN.JeSuoFdQzu1ncs059azTFZnjVMJZrdU5FfO', 655416412, '180 cao lỗ', 0, 0),
(15, 'khanh', '1239894@gmail.com', '$2a$05$17tEmbJ5QcSFZNy8DECxUuH3zO51yBqsaSuwr1sOPvouA6qQ8pZ3m', 655416412, '180 cao lỗ', 0, 0),
(16, 'khanh', '12398@gmail.com', '$2a$05$oZY7dF0hLz.KsdfmBD7Sme75iAuXtQ3S8zcJQ/nLJp65JtEa89BWe', 655416412, '180 cao lỗ', 0, 0);
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
=======
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
>>>>>>> Stashed changes

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
