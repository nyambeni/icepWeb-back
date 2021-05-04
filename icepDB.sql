CREATE TABLE applicant(
        applicantId int(11) AUTO_INCREMENT PRIMARY KEY,
	firstName VARCHAR(50),
        lastName VARCHAR(30) NOT NULL,
        email VARCHAR(50) NOT NULL UNIQUE,
        password VARCHAR(30) NOT NULL  
);
INSERT INTO `applicant` (`applicantId`, `firstName`, `lastName`, `email`, `password`) VALUES
(1, 'Alex', 'Mathenjwa', 'tymod17@gmail.com', '12345'),
(2, 'loop', 'model', 'test7@gmail.com', '123456789'),
(3, 'thimothi', 'mosesh', 'tymo157@gmail.com', '12345'
);

CREATE TABLE applications(
       applicationId int(11) AUTO_INCREMENT PRIMARY KEY,
       firstName VARCHAR(50) NOT NULL,
       lastName VARCHAR(30) NOT NULL,
       email varchar(50),
       studentno varchar(50),
       specialization varchar(50),
       mobileno varchar(13),
       supportedDocs varchar(50)

);
CREATE TABLE admin(
       adminId int(5) AUTO_INCREMENT PRIMARY KEY,
       firstName VARCHAR(50),
       lastName VARCHAR(30) NOT NULL,
       email varchar(255) NOT NULL UNIQUE,
       password varchar(50) NOT NULL
);
CREATE TABLE vacancies(
       vacId int(5) AUTO_INCREMENT PRIMARY KEY,
       vacancyName VARCHAR(200),
       vacancyDesc VARCHAR(200) NOT NULL,
       closingDate varchar(100) NOT NULL,
       datePosted DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
); 




