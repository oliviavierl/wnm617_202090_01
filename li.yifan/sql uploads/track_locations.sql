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
-- Table structure for table `track_locations`
--

CREATE TABLE `track_locations` (
  `id` int(51) NOT NULL,
  `mood_id` int(51) NOT NULL,
  `lat` decimal(9,6) NOT NULL,
  `lng` decimal(9,6) NOT NULL,
  `description` text NOT NULL,
  `photos` varchar(256) NOT NULL,
  `icon` varchar(256) NOT NULL,
  `date_create` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `track_locations`
--

INSERT INTO `track_locations` (`id`, `mood_id`, `lat`, `lng`, `description`, `photos`, `icon`, `date_create`) VALUES
(204, 21, 37.744800, -122.433919, 'Esse ea culpa excepteur irure voluptate eiusmod consectetur ullamco elit amet fugiat aliquip anim anim. Magna laboris ut eiusmod pariatur non esse non officia dolore occaecat aliquip. Consequat irure do adipisicing anim et culpa ipsum aliquip ullamco fugiat exercitation enim.', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/?text=ICON', '2020-03-25 11:01:45'),
(205, 41, 37.692380, -122.407731, 'Mollit ex ut qui elit dolore minim. Reprehenderit ea officia duis nulla anim aliqua reprehenderit aute. Magna amet irure fugiat sunt velit irure labore Lorem.', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/?text=ICON', '2020-10-26 01:30:21'),
(206, 39, 37.793000, -122.408167, 'Ut labore ipsum mollit esse excepteur aliquip voluptate aliqua. Amet voluptate enim aliquip veniam ea. Incididunt do commodo velit officia amet.', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/?text=ICON', '2020-09-17 04:02:54'),
(207, 20, 37.769600, -122.408908, 'Cupidatat officia occaecat commodo nulla deserunt Lorem sit sunt non. Labore aute est veniam commodo est ipsum nisi ullamco in minim mollit deserunt. Commodo sunt enim voluptate nostrud voluptate dolor laborum mollit cupidatat.', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/?text=ICON', '2020-09-19 08:21:49'),
(208, 48, 37.772190, -122.440956, 'Dolore esse est dolor ea quis nulla ut. Cillum magna sunt quis cupidatat laboris consequat sunt ut ex sunt tempor adipisicing mollit ea. Consectetur consequat deserunt consectetur reprehenderit veniam commodo consectetur irure pariatur cillum sit sunt laboris nisi.', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/?text=ICON', '2020-02-08 06:59:42'),
(209, 9, 37.790130, -122.402414, 'Proident nostrud ea excepteur amet deserunt mollit ullamco Lorem quis consequat ut aute cillum. Aliqua est minim nulla laboris laborum exercitation ea. Aliqua laborum ullamco quis voluptate amet velit deserunt dolore cupidatat quis cillum mollit excepteur.', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/?text=ICON', '2020-06-07 10:51:44'),
(210, 15, 37.756160, -122.488337, 'Reprehenderit Lorem fugiat deserunt aliqua ut quis. Sint et ad amet aute laborum esse minim. Ipsum nostrud do aliqua dolor in incididunt laboris cillum eu pariatur veniam aute ex anim.', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/?text=ICON', '2020-05-20 03:03:54'),
(211, 38, 37.714290, -122.425984, 'Aliqua incididunt magna dolore excepteur excepteur commodo ex. Minim adipisicing aliqua quis eiusmod commodo fugiat est exercitation ea exercitation amet cillum. Enim laborum est in tempor.', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/?text=ICON', '2020-01-15 05:39:55'),
(212, 3, 37.759490, -122.422950, 'Velit sunt cupidatat velit laborum ipsum. Lorem eiusmod in cillum voluptate commodo. Minim duis ut commodo Lorem cillum proident non ullamco id nisi.', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/?text=ICON', '2020-07-28 11:35:08'),
(213, 9, 37.693900, -122.495404, 'Eu elit nisi dolore sint reprehenderit nisi occaecat sunt quis. Duis id mollit consectetur et. Aute mollit velit officia id quis ex sunt culpa mollit officia proident in velit enim.', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/?text=ICON', '2020-09-21 10:04:19'),
(214, 45, 37.746130, -122.454976, 'Officia commodo nostrud velit dolor aute qui voluptate nulla ea. Nisi officia aliquip ipsum cupidatat incididunt anim quis mollit elit cupidatat. Elit deserunt ipsum occaecat magna laborum ad.', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/?text=ICON', '2020-05-03 04:54:16'),
(215, 6, 37.751330, -122.385299, 'Dolor quis aute consequat consectetur officia aliquip excepteur ut aliqua mollit eu aliqua. Nulla sint in culpa veniam excepteur eiusmod voluptate. Pariatur in esse officia sint.', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/?text=ICON', '2020-07-29 06:41:05'),
(216, 32, 37.763600, -122.418278, 'Aliqua officia reprehenderit est culpa ad velit ad aliquip. Ullamco excepteur duis elit aute sint non magna. Commodo elit occaecat laboris esse non tempor tempor consequat excepteur ut.', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/?text=ICON', '2020-10-29 11:00:33'),
(217, 16, 37.722710, -122.375756, 'Consequat sint amet nisi cillum officia dolor tempor non anim aliquip aute voluptate eiusmod quis. Veniam laborum laboris mollit reprehenderit nisi occaecat in aute deserunt qui. Fugiat consectetur deserunt ea consequat velit ad minim tempor qui proident.', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/?text=ICON', '2020-11-02 01:29:25'),
(218, 39, 37.724050, -122.470027, 'Esse eiusmod proident ipsum id pariatur. Ullamco tempor in minim irure qui. Mollit anim nulla reprehenderit qui ut laboris proident esse voluptate.', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/?text=ICON', '2020-09-16 10:46:34'),
(219, 16, 37.755940, -122.426788, 'Aliquip velit dolore aute velit occaecat sit quis officia exercitation ex. Fugiat ea aute velit enim aute dolor ut. Officia proident et Lorem adipisicing qui amet laboris.', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/?text=ICON', '2020-10-10 09:35:41'),
(220, 27, 37.765480, -122.499406, 'Elit qui nostrud pariatur est officia dolore dolor Lorem sunt amet velit in. Dolore non nisi velit consectetur duis officia officia. Quis dolore exercitation irure eu.', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/?text=ICON', '2020-03-13 10:39:47'),
(221, 2, 37.784030, -122.401189, 'Excepteur voluptate exercitation ullamco proident ex aute quis. Labore nisi fugiat excepteur velit elit consequat mollit tempor. Non in irure excepteur irure culpa aute Lorem magna sint ex exercitation qui mollit amet.', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/?text=ICON', '2020-07-21 12:18:11'),
(222, 13, 37.736900, -122.477448, 'Qui exercitation sit irure irure adipisicing cupidatat reprehenderit eiusmod magna commodo laborum Lorem consectetur. Cupidatat Lorem deserunt aute qui fugiat dolore incididunt cupidatat amet culpa. Aliqua est veniam in occaecat ipsum labore dolore voluptate dolor aliqua duis irure non irure.', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/?text=ICON', '2020-07-15 05:34:30'),
(223, 25, 37.695440, -122.456911, 'Lorem do Lorem ipsum id. Esse consectetur aliqua amet reprehenderit reprehenderit eu pariatur sint pariatur aliqua incididunt nulla. Duis velit excepteur irure eiusmod sunt pariatur pariatur deserunt aute sit tempor.', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/?text=ICON', '2020-03-08 10:30:34'),
(224, 37, 37.719470, -122.495206, 'Enim pariatur enim adipisicing adipisicing mollit sunt sunt est laboris. In tempor laborum deserunt eu ullamco sunt irure deserunt sint aute ut. Labore proident eiusmod commodo labore quis laborum aliqua laborum qui ex.', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/?text=ICON', '2020-09-06 12:13:23'),
(225, 3, 37.701650, -122.416887, 'Tempor consequat consequat proident in reprehenderit eiusmod in magna do qui. Ullamco elit elit laborum enim duis reprehenderit. Aliqua voluptate nisi fugiat ullamco aliquip esse labore dolor do in anim nisi labore elit.', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/?text=ICON', '2020-05-04 10:39:48'),
(226, 40, 37.773570, -122.402153, 'Anim do amet qui id occaecat et labore. Commodo cupidatat elit sit esse pariatur quis ea eu aliquip exercitation incididunt amet laboris. Non ad nisi cillum Lorem enim consequat occaecat fugiat esse sit quis velit.', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/?text=ICON', '2020-09-12 10:36:03'),
(227, 36, 37.750470, -122.402043, 'Minim cillum elit est fugiat proident duis enim sint ullamco. Velit sit dolor ex voluptate sit reprehenderit. Consectetur nostrud aliqua esse labore ullamco pariatur quis duis quis elit ad nisi ad.', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/?text=ICON', '2020-08-12 01:29:20'),
(228, 3, 37.699340, -122.475428, 'Eiusmod et do proident aliquip est eu. Adipisicing velit ad irure ex ipsum pariatur exercitation. Ullamco consequat duis esse do pariatur ad id nulla.', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/?text=ICON', '2020-08-03 10:54:32');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `track_locations`
--
ALTER TABLE `track_locations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `track_locations`
--
ALTER TABLE `track_locations`
  MODIFY `id` int(51) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=251;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
