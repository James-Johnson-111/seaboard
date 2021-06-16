-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 16, 2021 at 01:01 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `seaboard`
--

-- --------------------------------------------------------

--
-- Table structure for table `departments`
--

CREATE TABLE `departments` (
  `id` int(11) NOT NULL,
  `department_name` varchar(255) NOT NULL,
  `department_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `departments`
--

INSERT INTO `departments` (`id`, `department_name`, `department_id`) VALUES
(1, 'IT', 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `father_name` varchar(255) NOT NULL,
  `date_of_birth` varchar(255) NOT NULL,
  `place_of_birth` varchar(255) NOT NULL,
  `user_image` varchar(255) NOT NULL,
  `educational_qualification` varchar(255) NOT NULL,
  `residential_address` varchar(255) NOT NULL,
  `permanent_address` varchar(255) NOT NULL,
  `emergency_contact` varchar(255) NOT NULL,
  `landline_home` varchar(255) NOT NULL,
  `personal_number` varchar(255) NOT NULL,
  `cnic` int(11) NOT NULL,
  `signature` varchar(255) DEFAULT NULL,
  `thumb` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `login_id` varchar(255) NOT NULL,
  `date_of_joining` varchar(255) DEFAULT NULL,
  `desigantion` varchar(255) DEFAULT NULL,
  `department_id` int(11) DEFAULT NULL,
  `monthly_salary` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `father_name`, `date_of_birth`, `place_of_birth`, `user_image`, `educational_qualification`, `residential_address`, `permanent_address`, `emergency_contact`, `landline_home`, `personal_number`, `cnic`, `signature`, `thumb`, `password`, `login_id`, `date_of_joining`, `desigantion`, `department_id`, `monthly_salary`) VALUES
(1, 'Usman Badar', 'Badar Alam', '24-04-2021', 'karachi', 'user.png', 'BSC', 'north karachi', 'north karachi', '03303744620', '03303744620', '03303744620', 1, 'usman', 'thumb', 'ee9128e1f023587cab96caf7c89844caf8c6d7e166352e0dc1e0595eb46cfc73d43496d815320ec7c48d15e3a96fd0a93e32e573ed294d6bb8cd229f7b86adab66e3fc35b968aefbb0ea5cfbf1e676f832210f8eb063556152ec6ea315d6832727639f8377a9feb2', 'UsmanBadar', '13-03-2021', 'Junior Developer', 1, '50000');

-- --------------------------------------------------------

--
-- Table structure for table `users_cnic`
--

CREATE TABLE `users_cnic` (
  `id` int(11) NOT NULL,
  `cnic` varchar(255) NOT NULL,
  `place_of_issue` varchar(255) NOT NULL,
  `date_of_issue` varchar(255) NOT NULL,
  `date_of_expiry` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `departments`
--
ALTER TABLE `departments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users_cnic`
--
ALTER TABLE `users_cnic`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `departments`
--
ALTER TABLE `departments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users_cnic`
--
ALTER TABLE `users_cnic`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
