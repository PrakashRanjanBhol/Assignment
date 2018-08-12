-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 12, 2018 at 12:36 PM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `assignment`
--

DELIMITER $$
--
-- Procedures
--
CREATE  PROCEDURE `emp_deletion` (IN `employee_id` INT(11), IN `user_id` INT(100))  BEGIN

START TRANSACTION;
  
delete from emp_performance_mst where REVIEW_FROM_ID = employee_id or REVIEW_TO_ID = employee_id;   
delete from emp_mst where EMP_ID = employee_id;  
  
delete from user_mst where id = user_id;

COMMIT;
END$$

CREATE  PROCEDURE `emp_insertion` (IN `first_name` VARCHAR(100), IN `middle_name` VARCHAR(100), IN `last_name` VARCHAR(100), IN `email_id` VARCHAR(100), IN `mobile_no` VARCHAR(20), IN `address` VARCHAR(250), IN `pwd` VARCHAR(50))  BEGIN

DECLARE user_id INT;

START TRANSACTION;
  
  
insert into user_mst(USER_NAME,PWD,IS_ACTIVE,IS_ADMIN) VALUES(email_id,pwd,'Y','N');

SELECT ID INTO user_id  FROM user_mst order by ID desc limit 1 ;

    insert into emp_mst (USER_ID,FIRST_NAME,MIDDLE_NAME,LAST_NAME,EMAIL_ID,MOBILE_NO,ADDRESS) values (user_id ,first_name,middle_name,
	last_name,email_id,mobile_no,address);
  
COMMIT;
END$$

CREATE  PROCEDURE `emp_updation` (IN `employee_id` INT(11), IN `user_id` INT(100), IN `first_name` VARCHAR(100), IN `middle_name` VARCHAR(100), IN `last_name` VARCHAR(100), IN `email_id` VARCHAR(100), IN `mobile_no` VARCHAR(20), IN `address` VARCHAR(250), IN `pwd` VARCHAR(50))  BEGIN

START TRANSACTION;
  
  
update user_mst set PWD = pwd where id = user_id;


    update emp_mst set FIRST_NAME = first_name,MIDDLE_NAME = middle_name,LAST_NAME = last_name,EMAIL_ID = email_id,MOBILE_NO = mobile_no,ADDRESS = address where EMP_ID = employee_id;
  
COMMIT;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `emp_mst`
--

CREATE TABLE `emp_mst` (
  `EMP_ID` int(11) NOT NULL,
  `USER_ID` int(11) NOT NULL,
  `FIRST_NAME` varchar(100) NOT NULL,
  `MIDDLE_NAME` varchar(100) NOT NULL,
  `LAST_NAME` varchar(100) NOT NULL,
  `EMAIL_ID` varchar(100) NOT NULL,
  `MOBILE_NO` varchar(20) NOT NULL,
  `ADDRESS` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `emp_mst`
--

INSERT INTO `emp_mst` (`EMP_ID`, `USER_ID`, `FIRST_NAME`, `MIDDLE_NAME`, `LAST_NAME`, `EMAIL_ID`, `MOBILE_NO`, `ADDRESS`) VALUES
(14, 15, 'Prakash', 'Ranjan', 'Bhol', 'prakash@gmail.com', '8888888888', 'Hyderabad'),
(15, 16, 'Bikash', 'Ranjan', 'Bhol', 'bikash@gmail.com', '9999999999', 'Hyderabad'),
(16, 17, 'Rajesh', 'Kumar', 'Roy', 'rajesh@gmail.com', '6666666666', 'Hyderabad');

-- --------------------------------------------------------

--
-- Table structure for table `emp_performance_mst`
--

CREATE TABLE `emp_performance_mst` (
  `PERFORMANCE_ID` int(11) NOT NULL,
  `REVIEW_FROM_ID` int(11) NOT NULL,
  `REVIEW_TO_ID` int(11) NOT NULL,
  `SUBJECT` varchar(250) NOT NULL,
  `REVIEW` varchar(250) NOT NULL,
  `RATINGS` int(11) NOT NULL,
  `REVIEW_STATUS` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `emp_performance_mst`
--

INSERT INTO `emp_performance_mst` (`PERFORMANCE_ID`, `REVIEW_FROM_ID`, `REVIEW_TO_ID`, `SUBJECT`, `REVIEW`, `RATINGS`, `REVIEW_STATUS`) VALUES
(10, 14, 15, 'How Bikash is working?', 'He is working very good', 9, 'Y'),
(11, 14, 16, 'How Rajesh is working?', '', 0, 'N'),
(12, 15, 14, 'How Prakash is working?', '', 0, 'N');

-- --------------------------------------------------------

--
-- Table structure for table `user_mst`
--

CREATE TABLE `user_mst` (
  `ID` int(11) NOT NULL,
  `USER_NAME` varchar(100) NOT NULL,
  `PWD` varchar(100) NOT NULL,
  `IS_ACTIVE` varchar(1) NOT NULL,
  `IS_ADMIN` varchar(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_mst`
--

INSERT INTO `user_mst` (`ID`, `USER_NAME`, `PWD`, `IS_ACTIVE`, `IS_ADMIN`) VALUES
(1, 'admin', 'admin', 'Y', 'Y'),
(15, 'prakash@gmail.com', 'prakash', 'Y', 'N'),
(16, 'bikash@gmail.com', 'bikash', 'Y', 'N'),
(17, 'rajesh@gmail.com', 'rajesh', 'Y', 'N');

-- --------------------------------------------------------

--
-- Stand-in structure for view `vw_emp_mst`
-- (See below for the actual view)
--
CREATE TABLE `vw_emp_mst` (
`EMP_ID` int(11)
,`USER_ID` int(11)
,`USER_NAME` varchar(100)
,`PWD` varchar(100)
,`FIRST_NAME` varchar(100)
,`MIDDLE_NAME` varchar(100)
,`LAST_NAME` varchar(100)
,`EMAIL_ID` varchar(100)
,`MOBILE_NO` varchar(20)
,`ADDRESS` varchar(250)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `vw_emp_performance_mst`
-- (See below for the actual view)
--
CREATE TABLE `vw_emp_performance_mst` (
`PERFORMANCE_ID` int(11)
,`REVIEW_FROM_ID` int(11)
,`REVIEW_FROM_NAME` varchar(302)
,`REVIEW_TO_ID` int(11)
,`REVIEW_TO_NAME` varchar(302)
,`SUBJECT` varchar(250)
,`REVIEW` varchar(250)
,`RATINGS` int(11)
,`REVIEW_STATUS` varchar(10)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `vw_user_mst`
-- (See below for the actual view)
--
CREATE TABLE `vw_user_mst` (
`ID` int(11)
,`USER_NAME` varchar(100)
,`PWD` varchar(100)
,`IS_ACTIVE` varchar(1)
,`IS_ADMIN` varchar(1)
,`EMP_ID` int(11)
);

-- --------------------------------------------------------

--
-- Structure for view `vw_emp_mst`
--
DROP TABLE IF EXISTS `vw_emp_mst`;

CREATE ALGORITHM=UNDEFINED  SQL SECURITY DEFINER VIEW `vw_emp_mst`  AS  (select `emp_mst`.`EMP_ID` AS `EMP_ID`,`emp_mst`.`USER_ID` AS `USER_ID`,`user_mst`.`USER_NAME` AS `USER_NAME`,`user_mst`.`PWD` AS `PWD`,`emp_mst`.`FIRST_NAME` AS `FIRST_NAME`,`emp_mst`.`MIDDLE_NAME` AS `MIDDLE_NAME`,`emp_mst`.`LAST_NAME` AS `LAST_NAME`,`emp_mst`.`EMAIL_ID` AS `EMAIL_ID`,`emp_mst`.`MOBILE_NO` AS `MOBILE_NO`,`emp_mst`.`ADDRESS` AS `ADDRESS` from (`emp_mst` join `user_mst` on((`emp_mst`.`USER_ID` = `user_mst`.`ID`)))) ;

-- --------------------------------------------------------

--
-- Structure for view `vw_emp_performance_mst`
--
DROP TABLE IF EXISTS `vw_emp_performance_mst`;

CREATE ALGORITHM=UNDEFINED  SQL SECURITY DEFINER VIEW `vw_emp_performance_mst`  AS  (select `emp_performance`.`PERFORMANCE_ID` AS `PERFORMANCE_ID`,`emp_performance`.`REVIEW_FROM_ID` AS `REVIEW_FROM_ID`,concat(`review_from`.`FIRST_NAME`,' ',`review_from`.`MIDDLE_NAME`,' ',`review_from`.`LAST_NAME`) AS `REVIEW_FROM_NAME`,`emp_performance`.`REVIEW_TO_ID` AS `REVIEW_TO_ID`,concat(`review_to`.`FIRST_NAME`,' ',`review_to`.`MIDDLE_NAME`,' ',`review_to`.`LAST_NAME`) AS `REVIEW_TO_NAME`,`emp_performance`.`SUBJECT` AS `SUBJECT`,`emp_performance`.`REVIEW` AS `REVIEW`,`emp_performance`.`RATINGS` AS `RATINGS`,`emp_performance`.`REVIEW_STATUS` AS `REVIEW_STATUS` from ((`emp_performance_mst` `emp_performance` join `emp_mst` `review_from` on((`emp_performance`.`REVIEW_FROM_ID` = `review_from`.`EMP_ID`))) join `emp_mst` `review_to` on((`emp_performance`.`REVIEW_TO_ID` = `review_to`.`EMP_ID`)))) ;

-- --------------------------------------------------------

--
-- Structure for view `vw_user_mst`
--
DROP TABLE IF EXISTS `vw_user_mst`;

CREATE ALGORITHM=UNDEFINED  SQL SECURITY DEFINER VIEW `vw_user_mst`  AS  select `user_mst`.`ID` AS `ID`,`user_mst`.`USER_NAME` AS `USER_NAME`,`user_mst`.`PWD` AS `PWD`,`user_mst`.`IS_ACTIVE` AS `IS_ACTIVE`,`user_mst`.`IS_ADMIN` AS `IS_ADMIN`,`emp_mst`.`EMP_ID` AS `EMP_ID` from (`user_mst` left join `emp_mst` on((`user_mst`.`ID` = `emp_mst`.`USER_ID`))) ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `emp_mst`
--
ALTER TABLE `emp_mst`
  ADD PRIMARY KEY (`EMP_ID`),
  ADD KEY `fk_user_id` (`USER_ID`);

--
-- Indexes for table `emp_performance_mst`
--
ALTER TABLE `emp_performance_mst`
  ADD PRIMARY KEY (`PERFORMANCE_ID`),
  ADD KEY `fk_emp_id` (`REVIEW_FROM_ID`),
  ADD KEY `fk_review_to_id` (`REVIEW_TO_ID`);

--
-- Indexes for table `user_mst`
--
ALTER TABLE `user_mst`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `emp_mst`
--
ALTER TABLE `emp_mst`
  MODIFY `EMP_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT for table `emp_performance_mst`
--
ALTER TABLE `emp_performance_mst`
  MODIFY `PERFORMANCE_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `user_mst`
--
ALTER TABLE `user_mst`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `emp_mst`
--
ALTER TABLE `emp_mst`
  ADD CONSTRAINT `fk_user_id` FOREIGN KEY (`USER_ID`) REFERENCES `user_mst` (`ID`);

--
-- Constraints for table `emp_performance_mst`
--
ALTER TABLE `emp_performance_mst`
  ADD CONSTRAINT `fk_emp_id` FOREIGN KEY (`REVIEW_FROM_ID`) REFERENCES `emp_mst` (`EMP_ID`),
  ADD CONSTRAINT `fk_review_to_id` FOREIGN KEY (`REVIEW_TO_ID`) REFERENCES `emp_mst` (`EMP_ID`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
