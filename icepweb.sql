-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 21, 2020 at 08:34 AM
-- Server version: 10.4.10-MariaDB
-- PHP Version: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `icepweb`
--

DELIMITER $$
--
-- Procedures
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `update_admin` (IN `_id` INT, IN `_first_name` VARCHAR(255), IN `_last_name` VARCHAR(255), IN `_username` VARCHAR(255), IN `_phone_no` VARCHAR(255), IN `_email` VARCHAR(255), IN `_password` VARCHAR(255))  BEGIN
	IF _id = 0 THEN
    	INSERT INTO admin_reg(first_name,last_name,username,phone_no,email,password)
        VALUES (_first_name,_last_name,_username,_phone_no,_email,_password);
        
        SET _id = LAST_INSERT_ID();
    ELSE
    	UPDATE admin_reg
        SET 
        	first_name = _first_name,
        	last_name = _last_name,
            username = _username,
            phone_no = _phone_no,
            email = _email,
            password = _password
        WHERE id = _id;
    END IF;
        
        SELECT _id AS 'id';
  END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `update_profile` (IN `_id` INT, IN `_first_name` VARCHAR(50), IN `_last_name` VARCHAR(50), IN `_phone_no` VARCHAR(10), IN `_email` VARCHAR(50), IN `_password` VARCHAR(50))  BEGIN
	IF _id = 0 THEN
    	INSERT INTO register(first_name,last_name,phone_no,email,password)
        VALUES (_first_name,_last_name,_phone_no,_email,_password);
        
        SET _id = LAST_INSERT_ID();
    ELSE
    	UPDATE register
        SET 
        	first_name = _first_name,
        	last_name = _last_name,
            phone_no = _phone_no,
            email = _email,
            password = _password
        WHERE id = _id;
    END IF;
        
        SELECT _id AS 'id';
  END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `admin_reg`
--

CREATE TABLE `admin_reg` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin_reg`
--

INSERT INTO `admin_reg` (`id`, `email`,  `password`) VALUES
(1,  'tymod17@gmail.com', '12345'),
(3, 'test7@gmail.com', '123456789'),
(4, 'tymo157@gmail.com', '12345');

-- --------------------------------------------------------

--
-- Table structure for table `applicantinfo`
--

CREATE TABLE `applicantinfo` (
  `id` int(11) NOT NULL,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `studentno`varchar(9) NOT NULL,
  `specialization` varchar(100) NOT NULL,
  `mobileno` varchar(10) NOT NULL,
  `email` varchar(100) NOT NULL,
  `document` varchar(2500) NOT NULL,
  `status` varchar(13) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `applicantinfo`
--

INSERT INTO `applicantinfo` (`id`, `firstname`, `lastname`, `studentno`, `specialization`, `mobileno`, `email`, `document`, `status`) VALUES
(1, 'fanie', 'zwane', '215580489',  'web and application development', '0842589644', 'zwane@gmail.com', 'zwane_cv.docx','pending'),
(2, 'themba', 'shabangu', '213320840',  'web and application development', '0848973011', 'thembashabagu50@gmail.com', 'themba_cv.docx','accepted')

-- --------------------------------------------------------

--
-- Table structure for table `file_uploads`
--



-- --------------------------------------------------------

--
-- Table structure for table `register`
--

CREATE TABLE `register` (
  `id` int(11) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `register`
--

INSERT INTO `register` (`id`, `first_name`, `last_name`,  `email`, `password`) VALUES
(1, 'kay', 'mod',  'testme@gmail.com', '123456789'),
(2, 'test', 'me',  'kktstest@gmail.com', '123456799##'),
(3, 'me', 'too', 'at@yahoo.com', '123456789'),
(23, 'oop', 'mod',  'test44@gmail.com', '123456789'),
(24, 'thando', 'shabangu',  'thando@gmail.com', '1234567 '),
(26, 'ty', 'mo',  'tymo157@gmail.com', '12345'),
(28, 'ty', 'mo',  'tymo554@gmail.com', '12345');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin_reg`
--
ALTER TABLE `admin_reg`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `applicantinfo`
--
ALTER TABLE `applicantinfo`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `email_2` (`email`);

--
-- Indexes for table `file_uploads`
--
ALTER TABLE `file_uploads`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `register`
--
ALTER TABLE `register`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin_reg`
--
ALTER TABLE `admin_reg`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `applicantinfo`
--
ALTER TABLE `applicantinfo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `file_uploads`
--
ALTER TABLE `file_uploads`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `register`
--
ALTER TABLE `register`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
