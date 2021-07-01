-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 01, 2021 at 02:26 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 7.3.28

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
-- Table structure for table `descussions`
--

CREATE TABLE `descussions` (
  `id` int(11) NOT NULL,
  `emp_id` int(11) NOT NULL,
  `description` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `descussions`
--

INSERT INTO `descussions` (`id`, `emp_id`, `description`, `image`) VALUES
(1, 1, 'In publishing and graphic design, Lorem ipsum is aIn publishing and graphic design, Lorem ipsum is aIn publishing and graphic design, Lorem ipsum is a', 'img1.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `emp_id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `father_name` varchar(30) NOT NULL,
  `date_of_birth` varchar(50) NOT NULL,
  `place_of_birth` varchar(100) NOT NULL,
  `residential_address` varchar(100) NOT NULL,
  `permanent_address` varchar(100) NOT NULL,
  `emergency_person_name` varchar(40) NOT NULL,
  `emergency_person_number` varchar(40) NOT NULL,
  `landline` varchar(30) NOT NULL,
  `cell` varchar(30) NOT NULL,
  `education` varchar(255) DEFAULT NULL,
  `login_id` varchar(40) NOT NULL,
  `password` varchar(255) NOT NULL,
  `image` varchar(150) DEFAULT NULL,
  `time_in` varchar(255) NOT NULL,
  `time_out` varchar(255) NOT NULL,
  `additional_off` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`emp_id`, `name`, `father_name`, `date_of_birth`, `place_of_birth`, `residential_address`, `permanent_address`, `emergency_person_name`, `emergency_person_number`, `landline`, `cell`, `education`, `login_id`, `password`, `image`, `time_in`, `time_out`, `additional_off`) VALUES
(1, 'Usman', 'Badar', '2002-09-24', 'Karachi', 'Karachi, Pakistan', 'LS-5, ST-8, SECTOR-10, NORTH KARACHI', 'Umer', '03303744620', '03303744620', '03303744620', '[{\"eduLevel\":\"Bachelor\",\"eduTitle\":\"BSc\",\"eduIName\":\"NED\",\"eduYComplete\":\"2021-06-03\"}]', 'UsmanBadar', 'sha1$8669c482$1$f841477fb40647bad0bda591014dc2acae6b21e3', 'Usm4210033.png', '09:00 am', '05:00 pm', 'Saturday'),
(3, 'Umer', 'Badar', '2021-06-12', 'Karachi', 'Karachi, Pakistan', 'LS-5, ST-8, SECTOR-10, NORTH KARACHI', 'Usman', '03303744620', '03303744620', '03303744620', '[]', 'UmerBadar', 'sha1$f5d5e9ed$1$1164af420bbb332eb4cf01bb87e80ccbc0e2d21b', 'Ume4210033.png', '09:00 am', '05:00 pm', NULL),
(6, 'Antash', 'Jawed', '2021-07-03', 'Sujawel', 'Karachi, Pakistan', 'LS-5, ST-8, SECTOR-10, NORTH KARACHI', 'UmerBadar', '03303744620', '03303744620', '03303744620', '[{\"eduLevel\":\"Bachelor\",\"eduTitle\":\"B.Com\",\"eduIName\":\"Sindh University\",\"eduYComplete\":\"2021-07-02\"}]', 'Antash', 'sha1$309c1df6$1$a64b36cf2b9ebeecefe11491d2f722121223f122', 'Ant4210033.png', '09:00 am', '05:00 pm', '');

-- --------------------------------------------------------

--
-- Table structure for table `emp_attendance`
--

CREATE TABLE `emp_attendance` (
  `id` int(11) NOT NULL,
  `emp_id` int(11) NOT NULL,
  `emp_status` varchar(100) NOT NULL,
  `time_in` varchar(100) DEFAULT NULL,
  `time_out` varchar(100) DEFAULT NULL,
  `break_in` varchar(100) DEFAULT NULL,
  `break_out` varchar(100) DEFAULT NULL,
  `emp_date` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `emp_documents`
--

CREATE TABLE `emp_documents` (
  `id` int(11) NOT NULL,
  `emp_id` int(11) NOT NULL,
  `cnic` varchar(255) NOT NULL,
  `cv` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `education` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `emp_documents`
--

INSERT INTO `emp_documents` (`id`, `emp_id`, `cnic`, `cv`, `address`, `education`) VALUES
(2, 3, 'UmBad4210.png', 'UmBad4210.png', 'UmBad4210.png', 'UmBad4210.png'),
(4, 6, 'AnJaw4210.png', 'AnJaw4210.png', 'AnJaw4210.png', 'AnJaw4210.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `descussions`
--
ALTER TABLE `descussions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `emp_id` (`emp_id`);

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`emp_id`);

--
-- Indexes for table `emp_attendance`
--
ALTER TABLE `emp_attendance`
  ADD PRIMARY KEY (`id`),
  ADD KEY `emp_id` (`emp_id`);

--
-- Indexes for table `emp_documents`
--
ALTER TABLE `emp_documents`
  ADD PRIMARY KEY (`id`),
  ADD KEY `emp_id` (`emp_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `descussions`
--
ALTER TABLE `descussions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `emp_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `emp_attendance`
--
ALTER TABLE `emp_attendance`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `emp_documents`
--
ALTER TABLE `emp_documents`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `descussions`
--
ALTER TABLE `descussions`
  ADD CONSTRAINT `descussions_ibfk_1` FOREIGN KEY (`emp_id`) REFERENCES `employees` (`emp_id`);

--
-- Constraints for table `emp_attendance`
--
ALTER TABLE `emp_attendance`
  ADD CONSTRAINT `emp_attendance_ibfk_1` FOREIGN KEY (`emp_id`) REFERENCES `employees` (`emp_id`);

--
-- Constraints for table `emp_documents`
--
ALTER TABLE `emp_documents`
  ADD CONSTRAINT `emp_documents_ibfk_1` FOREIGN KEY (`emp_id`) REFERENCES `employees` (`emp_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
