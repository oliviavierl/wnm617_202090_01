-- phpMyAdmin SQL Dump
-- version 4.9.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 17, 2020 at 02:54 PM
-- Server version: 5.6.49-cll-lve
-- PHP Version: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `aauwnm608vierl`
--

-- --------------------------------------------------------

--
-- Table structure for table `track_users`
--

CREATE TABLE `track_users` (
  `id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL,
  `username` varchar(64) NOT NULL,
  `email` varchar(64) NOT NULL,
  `quote` varchar(128) NOT NULL,
  `password` varchar(64) NOT NULL,
  `img` varchar(256) NOT NULL,
  `phone` varchar(64) NOT NULL,
  `address` varchar(128) NOT NULL,
  `favorite` varchar(64) NOT NULL,
  `date_create` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `track_users`
--

INSERT INTO `track_users` (`id`, `name`, `username`, `email`, `quote`, `password`, `img`, `phone`, `address`, `favorite`, `date_create`) VALUES
(1, 'Leanne Sheppard', 'user1', 'user1@gmail.com', 'Life is what happens when you are busy making other plans.', '1a1dc91c907325c69271ddf0c944bc72', 'uploads/1608234254.9868_0f27f79b-b3b3-4156-95ff-5a878c0000b7_1024.jpg', '+1 (816) 467-3852', '530 Lorimer Street, 64618', 'Si-fi Movies', '2020-04-10 02:03:33'),
(2, 'Humphrey Franks', 'user2', 'user2@gmail.com', 'If life were predictable it would cease to be life, and be without flavor.', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/400/773/fff/?text=user2', '+1 (908) 595-3173', '987 Strickland Avenue, 48203', 'Cooking', '2020-11-20 02:40:24'),
(3, 'Lang Carney', 'user3', 'user3@gmail.com', 'Love life, enjoy everyday~', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/400/913/fff/?text=user3', '+1 (999) 481-2696', '163 Strauss Street, 13073', 'Outdoor Activities', '2020-11-12 03:21:40'),
(4, 'Muriel Lester', 'user4', 'user4@gmail.com', 'If you want the rainbow, you gotta put up with the rain.', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/400/843/fff/?text=user4', '+1 (913) 594-3315', '761 Fairview Place, 25992', 'Cooking', '2020-03-21 08:48:19'),
(5, 'Perkins Morrison', 'user5', 'user5@gmail.com', 'If you want the rainbow, you gotta put up with the rain.', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/400/923/fff/?text=user5', '+1 (888) 454-3516', '243 Allen Avenue, 38836', 'Outdoor Activities', '2020-10-13 03:15:41'),
(6, 'Carter Mckee', 'user6', 'user6@gmail.com', 'Love life, enjoy everyday~', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/400/770/fff/?text=user6', '+1 (839) 510-2868', '514 Noel Avenue, 53532', 'Si-fi Movies', '2020-09-12 05:29:45'),
(7, 'Mona Everett', 'user7', 'user7@gmail.com', 'If you want the rainbow, you gotta put up with the rain.', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/400/952/fff/?text=user7', '+1 (940) 431-2680', '586 Grand Avenue, 86309', 'Cooking', '2020-11-24 11:10:08'),
(8, 'Romero Conway', 'user8', 'user8@gmail.com', 'Love life, enjoy everyday~', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/400/980/fff/?text=user8', '+1 (877) 454-2634', '160 Morgan Avenue, 54738', 'Outdoor Activities', '2020-08-25 06:11:40'),
(9, 'Aguilar Deleon', 'user9', 'user9@gmail.com', 'If you want the rainbow, you gotta put up with the rain.', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/400/776/fff/?text=user9', '+1 (976) 583-2973', '189 Fane Court, 54747', 'Cooking', '2020-12-06 03:21:53'),
(10, 'Dianna Rocha', 'user10', 'user10@gmail.com', 'Life is what happens when you are busy making other plans.', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/400/995/fff/?text=user10', '+1 (836) 433-3709', '863 Canda Avenue, 78793', 'Si-fi Movies', '2020-03-29 05:36:02'),
(11, 'aa', 'temp', 'aa@aa.com', 'aa', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/400?text=USER', 'aaa', 'aa', 'aa', '2020-12-16 22:05:30'),
(12, 'Olivia Li', 'user15', 'aa@aa.com', 'Enjoy life!', '1a1dc91c907325c69271ddf0c944bc72', 'uploads/1608187759.7574_0f27f79b-b3b3-4156-95ff-5a878c0000b7_1024.jpg', '000', 'aaa', 'a', '2020-12-16 23:47:31'),
(13, 'Olivia Li', 'user0', 'olivia@gmail.com', 'Enjoy life! You only live once!', '1a1dc91c907325c69271ddf0c944bc72', 'uploads/1608241901.6158_0f27f79b-b3b3-4156-95ff-5a878c0000b7_1024.jpg', '(628)219-6375', '888 O\'Farrell Street, 94109', 'Cooking', '2020-12-17 14:51:22');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `track_users`
--
ALTER TABLE `track_users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `track_users`
--
ALTER TABLE `track_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
