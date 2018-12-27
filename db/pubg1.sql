-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2018-06-20 15:31:22
-- 服务器版本： 10.1.28-MariaDB
-- PHP Version: 7.1.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pubg`
--

-- --------------------------------------------------------

--
-- 表的结构 `gun_details`
--

CREATE TABLE `gun_details` (
  `did` int(11) NOT NULL,
  `dname` varchar(32) DEFAULT NULL,
  `ammo` varchar(32) DEFAULT NULL,
  `cap` tinyint(4) DEFAULT NULL,
  `power` tinyint(4) DEFAULT NULL,
  `d_range` tinyint(4) DEFAULT NULL,
  `stability` tinyint(4) DEFAULT NULL,
  `rate` tinyint(4) DEFAULT NULL,
  `bsd_lv0` varchar(16) DEFAULT NULL,
  `bsd_lv1` varchar(16) DEFAULT NULL,
  `bsd_lv2` varchar(16) DEFAULT NULL,
  `bsd_lv3` varchar(16) DEFAULT NULL,
  `hsd_lv0` varchar(16) DEFAULT NULL,
  `hsd_lv1` varchar(16) DEFAULT NULL,
  `hsd_lv2` varchar(16) DEFAULT NULL,
  `hsd_lv3` varchar(16) DEFAULT NULL,
  `d_describe` varchar(128) DEFAULT NULL,
  `d_picture` varchar(128) DEFAULT NULL,
  `type_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `gun_details`
--

INSERT INTO `gun_details` (`did`, `dname`, `ammo`, `cap`, `power`, `d_range`, `stability`, `rate`, `bsd_lv0`, `bsd_lv1`, `bsd_lv2`, `bsd_lv3`, `hsd_lv0`, `hsd_lv1`, `hsd_lv2`, `hsd_lv3`, `d_describe`, `d_picture`, `type_id`) VALUES
(1, 'AWM', '.300', 5, 100, 100, 34, 6, '100', '92', '85', '75', '300', '200', '150', '100', NULL, NULL, 1);

-- --------------------------------------------------------

--
-- 表的结构 `gun_type`
--

CREATE TABLE `gun_type` (
  `tid` int(11) NOT NULL,
  `tname` varchar(32) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `gun_type`
--

INSERT INTO `gun_type` (`tid`, `tname`) VALUES
(1, 'Snipers'),
(2, 'ARs'),
(3, 'MGs'),
(4, 'Shotguns'),
(5, 'Pistols');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `gun_details`
--
ALTER TABLE `gun_details`
  ADD PRIMARY KEY (`did`),
  ADD KEY `type_id` (`type_id`);

--
-- Indexes for table `gun_type`
--
ALTER TABLE `gun_type`
  ADD PRIMARY KEY (`tid`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `gun_details`
--
ALTER TABLE `gun_details`
  MODIFY `did` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- 使用表AUTO_INCREMENT `gun_type`
--
ALTER TABLE `gun_type`
  MODIFY `tid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- 限制导出的表
--

--
-- 限制表 `gun_details`
--
ALTER TABLE `gun_details`
  ADD CONSTRAINT `gun_details_ibfk_1` FOREIGN KEY (`type_id`) REFERENCES `gun_type` (`tid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
