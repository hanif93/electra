-- phpMyAdmin SQL Dump
-- version 4.5.3.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1:3306
-- Generation Time: May 01, 2016 at 12:37 PM
-- Server version: 5.6.28
-- PHP Version: 5.6.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `electra`
--

-- --------------------------------------------------------

--
-- Table structure for table `devices`
--

CREATE TABLE `devices` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `description` text NOT NULL,
  `status` tinyint(1) NOT NULL,
  `image_url` text NOT NULL,
  `in_repair` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `devices`
--

INSERT INTO `devices` (`id`, `name`, `description`, `status`, `image_url`, `in_repair`) VALUES
(4, 'L04', 'row 1, bulb no 1 from left', 0, '/static/img/bulb.png', 1),
(5, 'L05', 'row 1, bulb no 2 from left', 0, '/static/img/bulb.png', 1),
(6, 'L06', 'row 1, bulb no 3 from left', 0, '/static/img/bulb.png', 0),
(7, 'L07', 'row 1, bulb no 4 from left', 0, '/static/img/bulb.png', 0),
(8, 'L08', 'row 1, bulb no 5 from left', 0, '/static/img/bulb.png', 0),
(9, 'P09', 'row 1, bulb no 6 from left', 0, '/static/img/projector.png', 0),
(10, 'A10', 'row 1, bulb no 7 from left', 0, '/static/img/aircond.png', 0),
(11, 'A11', 'row 1, bulb no 8 from left', 0, '/static/img/aircond.png', 0),
(12, 'L12', 'row 1, bulb no 9 from left\r\n', 0, '/static/img/bulb.png', 0),
(13, 'L13', 'row 1, bulb no 10 from left\r\n', 0, '/static/img/bulb.png', 0),
(14, 'L14', 'row 1, bulb no 11 from left\r\n', 0, '/static/img/bulb.png\r\n', 0),
(15, 'L15', 'row 1, bulb no 12 from left\r\n', 0, '/static/img/bulb.png\r\n', 0),
(16, 'L16', 'row 1, bulb no 13 from left\r\n', 0, '/static/img/bulb.png', 0),
(17, 'L17', 'row 1, bulb no 14 from left', 0, '/static/img/bulb.png', 0),
(18, 'L18', 'row 1, bulb no 15 from left', 0, '/static/img/bulb.png', 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` text NOT NULL,
  `password` text NOT NULL,
  `role` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `role`) VALUES
(1, 'admin', 'admin', 1),
(2, 'user', 'user', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `devices`
--
ALTER TABLE `devices`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `devices`
--
ALTER TABLE `devices`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
