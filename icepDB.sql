CREATE TABLE applicant(
        applicationId int(11) AUTO_INCREMENT PRIMARY KEY,
	firstName VARCHAR(50),
        lastName VARCHAR(30) NOT NULL,
        email VARCHAR(50) NOT NULL UNIQUE,
        status varchar(50) DEFAULT 'Pending',
        password VARCHAR(30) NOT NULL  
);
CREATE TABLE applications(
       appId int(11) AUTO_INCREMENT PRIMARY KEY,
       firstName VARCHAR(50),
       lastName VARCHAR(30) NOT NULL,
       studentNo VARCHAR(9) NOT NULL,
       contactNo VARCHAR(13) NOT NULL,
       email VARCHAR(50) NOT NULL UNIQUE,
       supportingDocs VARCHAR(30) NOT NULL  
);
CREATE TABLE admin(
       adminId int(5) AUTO_INCREMENT PRIMARY KEY,
       email varchar(255) NOT NULL UNIQUE,
       password varchar(50) NOT NULL
);
CREATE TABLE file_uploads(
        apldId int(11) AUTO_INCREMENT PRIMARY KEY,
        name varchar(255) NOT NULL,
        type varchar(255) NOT NULL,
        size varchar(255) NOT NULL
);



